import React from 'react';
import classes from './Markers.module.css';
import { Marker} from "react-leaflet";
import { Popup } from 'react-leaflet';


const Marker27 = (props) => {
    return (
        <Marker position={[63.26352, 112.29151]}>
            <Popup>
                <div>
                    <table className={classes.tableWells}>
                        <tr>
                            <td><b>№ Скважины</b></td>
                            <td>J5</td>
                        </tr>
                        <tr>
                            <td><b>Регион</b></td>
                            <td>Западная Якутия</td>
                        </tr>
                        <tr>
                            <td><b>Физико-географическая область</b></td>
                            <td>Вилюйское плато</td>
                        </tr>
                        <tr>
                            <td><b>Период наблюдений, годы</b></td>
                            <td>2012-2021</td>
                        </tr>
                        <tr>
                            <td><b>Абсолютная высота, м</b></td>
                            <td>285</td>
                        </tr>
                        <tr>
                            <td><b>Глубина скважины, м</b></td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td><b>Диапазон межгодовой изменчивости средней годовой температуры грунта на подошве СТС</b></td>
                            <td>-0,1...-1,0</td>
                        </tr>
                        <tr>
                            <td><b>Среднее многолетнее значение мощности СТС, м</b></td>
                            <td>1,6</td>
                        </tr>
                        <tr>
                            <td><b>Состав грунта СТС</b></td>
                            <td>Супеси, пески</td>
                        </tr>
                        <tr>
                            <td><b>Состав грунта ММП (объемная льдистость в %) </b></td>
                            <td>Супеси, пески (15%)</td>
                        </tr>
                        <tr>
                            <td><b>Элемент мезорельефа</b></td>
                            <td>Надпойменная терраса</td>
                        </tr>
                        <tr>
                            <td><b>Растительный покров</b></td>
                            <td>Редкостойный березово-лиственничный лес кустарничково-лишайниковый</td>
                        </tr>
                        <tr>
                            <td><b>Напочвенный покров (мощность см)</b></td>
                            <td>Лишайники (3 см)</td>
                        </tr>
                        <tr>
                            <td><b>Диапазон межгодовой изменчивости максимальной высоты снежного покрова, см)</b></td>
                            <td>35-60</td>
                        </tr>
                        <tr>
                            <td><b>Лаборатория (ответственный за проведение мониторинга)</b></td>
                            <td>ЛКЛ (П.Я.Константинов)</td>
                        </tr>
                    </table>
                    <div>
                        <a href="well27.txt" download="well27.txt">
                            <button className={classes.buttonWells}><b>Скачать</b></button>
                        </a>
                    </div>
                </div>
            </Popup>
        </Marker>


    );
}

export default Marker27;