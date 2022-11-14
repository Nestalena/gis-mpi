import React from 'react';
import classes from "./Wells.module.css";

import DataGrid, {
    Column, HeaderFilter, SearchPanel, Scrolling, Paging,
} from 'devextreme-react/data-grid';
import service from './data.js';
import { locale, loadMessages } from "devextreme/localization";

loadMessages({
    "en": {
        "dxList-selectAll": "Выбрать все",
        "dxDataGrid-headerFilterOK": "Ок",
        "dxDataGrid-headerFilterCancel": "Закрыть",
    }
});
locale(navigator.language);

class Wells extends React.Component {
    constructor(props) {
        super(props);
        this.orders = service.getOrders();
        this.applyFilterTypes = [{
            key: 'auto',
            name: 'Immediately',
        }, {
            key: 'onClick',
            name: 'On Button Click',
        }];

        this.state = {
            showFilterRow: true,
            showHeaderFilter: true,
            currentFilter: this.applyFilterTypes[0].key,
        };
        this.dataGrid = null;
        this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
        this.onShowFilterRowChanged = this.onShowFilterRowChanged.bind(this);
        this.onShowHeaderFilterChanged = this.onShowHeaderFilterChanged.bind(this);
        this.onCurrentFilterChanged = this.onCurrentFilterChanged.bind(this);
    }

    render() {
        return (
            <div className={classes.wells}>
                <DataGrid id="gridContainer"
                          ref={(ref) => { this.dataGrid = ref; }}
                          dataSource={this.orders}
                          keyExpr="ID"
                          columnAutoWidth={true}
                          allowColumnResizing={true}
                          width={1750}
                          showBorders={false}>
                    <HeaderFilter visible={this.state.showHeaderFilter}
                                  allowSelectAll={false}
                                  height={360}/>
                    <SearchPanel visible={true}
                                 width={260}
                                 placeholder="Поиск..." />
                    <Paging defaultPageSize={20} />

                    <Column dataField="Region"
                            caption="Регион"
                            allowSorting={false}/>
                    <Column dataField="PhysicalGeographicalArea"
                            caption="Физико-географическая область"
                            allowHeaderFiltering={false}
                            allowSorting={false}/>
                    <Column dataField="Well"
                            caption="№ скважины"
                            allowHeaderFiltering={false}
                            allowSorting={false}/>
                    <Column width={170} dataField="ObservationPeriod"
                            caption="Период наблюдений"
                            allowSorting={false}
                            allowHeaderFiltering={false}/>
                    <Column width={180} dataField="GeographicalCoordinates"
                            caption="Географические координаты"
                            allowSorting={false}
                            allowHeaderFiltering={false}/>
                    <Column dataField="Altitude"
                            caption="Абсолютная высота, м"
                            allowSorting={false}
                            allowHeaderFiltering={false}/>
                    <Column dataField="WellDepth"
                            caption="Глубина скважины, м"
                            allowSorting={false}
                            allowHeaderFiltering={false}/>
                    <Column width={300} dataField="STSrange"
                            caption="Диапазон межгодовой изменчивости средней годовой температуры грунта на подошве СТС"
                            allowSorting={false}
                            allowHeaderFiltering={false}/>
                    <Column width={300} dataField="GroundTemperature"
                            caption="Температура грунта в нижней части слоя годовых теплооборотов (глубина, м)"
                            allowSorting={false}
                            allowHeaderFiltering={false}/>
                    <Column width={300} dataField="RockTemperature"
                            caption="Температура горных пород ниже  слоя годовых теплооборотов (глубина, м)"
                            allowSorting={false}
                            allowHeaderFiltering={false}/>
                    <Column width={300} dataField="MeasuredDepth"
                            caption="Измеренная глубина залегания нижней границы ММП, м "
                            allowSorting={false}
                            allowHeaderFiltering={false}/>
                    <Column width={300} dataField="STSpower"
                            caption="Среднее многолетнее значение мощности СТС, м"
                            allowSorting={false}
                            allowHeaderFiltering={false}>
                    </Column>
                    <Column dataField="SoilCompositionSTS"
                            caption="Состав грунта СТС"
                            allowHeaderFiltering={false}
                            allowSorting={false}>
                        <HeaderFilter allowSearch={false} />
                    </Column>
                    <Column dataField="SoilCompositionMMP"
                            caption="Состав грунта ММП (объемная льдистость в %) "
                            allowSorting={false}
                            allowHeaderFiltering={false}>
                        <HeaderFilter allowSearch={true} />
                    </Column>
                    <Column dataField="MesoreliefElement"
                            caption="Элемент мезорельефа"
                            allowSorting={false}
                            allowHeaderFiltering={false}>
                        <HeaderFilter allowSearch={true} />
                    </Column>
                    <Column dataField="VegetationCover"
                            caption="Растительный покров"
                            allowSorting={false}
                            allowHeaderFiltering={false}>
                        <HeaderFilter allowSearch={true} />
                    </Column>
                    <Column dataField="GroundCover"
                            caption="Напочвенный покров (мощность см)"
                            allowSorting={false}
                            allowHeaderFiltering={false}>
                        <HeaderFilter allowSearch={true} />
                    </Column>
                    <Column width={300} dataField="SnowCoverRange"
                            caption="Диапазон межгодовой изменчивости максимальной высоты снежного покрова, см"
                            allowSorting={false}
                            allowHeaderFiltering={false}/>
                    <Column width={200} dataField="PermafrostSpecialist"
                            caption="Лаборатория (ответственный за проведение мониторинга)"
                            allowHeaderFiltering={false}
                            allowSorting={false}/>
                    <Scrolling columnRenderingMode="virtual" />
                </DataGrid>
            </div>
        );
    }

    calculateFilterExpression(value, selectedFilterOperations, target) {
        const column = this;
        if (target === 'headerFilter' && value === 'weekends') {
            return [[getOrderDay, '=', 0], 'or', [getOrderDay, '=', 6]];
        }
        return column.defaultCalculateFilterExpression(value, selectedFilterOperations, target);
    }

    orderHeaderFilter(data) {
        data.dataSource.postProcess = (results) => {
            results.push({
                text: 'Weekends',
                value: 'weekends',
            });
            return results;
        };
    }

    onShowFilterRowChanged(e) {
        this.setState({
            showFilterRow: e.value,
        });
        this.clearFilter();
    }

    onShowHeaderFilterChanged(e) {
        this.setState({
            showHeaderFilter: e.value,
        });
        this.clearFilter();
    }

    onCurrentFilterChanged(e) {
        this.setState({
            currentFilter: e.value,
        });
    }

    clearFilter() {
        this.dataGrid.instance.clearFilter();
    }
}

function getOrderDay(rowData) {
    return (new Date(rowData.OrderDate)).getDay();
}


export default Wells;