import React from 'react';
import classes from './Markers.module.css';
import { Marker} from "react-leaflet";
import { Popup } from 'react-leaflet';


const Marker12 = (props) => {
    return (
        <Marker position={[61.25152, 128.50360]}>
            <Popup>
                <div>
                    <table className={classes.tableWells}>
                        <tr>
                            <td><b>№ Скважины</b></td>
                            <td>1a</td>
                        </tr>
                        <tr>
                            <td><b>Регион</b></td>
                            <td>Центральная Якутия</td>
                        </tr>
                        <tr>
                            <td><b>Физико-географическая область</b></td>
                            <td>Приленское плато</td>
                        </tr>
                        <tr>
                            <td><b>Период наблюдений, годы</b></td>
                            <td>1982-1983, 1995-2021</td>
                        </tr>
                        <tr>
                            <td><b>Абсолютная высота, м</b></td>
                            <td>176</td>
                        </tr>
                        <tr>
                            <td><b>Глубина скважины, м</b></td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td><b>Температура грунта в нижней части слоя годовых теплооборотов (глубина, м)</b></td>
                            <td>-2,2 (15)</td>
                        </tr>
                        <tr>
                            <td><b>Среднее многолетнее значение мощности СТС, м</b></td>
                            <td>1,8</td>
                        </tr>
                        <tr>
                            <td><b>Состав грунта СТС</b></td>
                            <td>Пылеватые суглинки</td>
                        </tr>
                        <tr>
                            <td><b>Состав грунта ММП (объемная льдистость в %) </b></td>
                            <td>Пылеватые суглинки, супеси, пески (50%)</td>
                        </tr>
                        <tr>
                            <td><b>Элемент мезорельефа</b></td>
                            <td>Выположенный участок денудационно-аккумулятивной равнины</td>
                        </tr>
                        <tr>
                            <td><b>Растительный покров</b></td>
                            <td>Луг на заброшенной пашне</td>
                        </tr>
                        <tr>
                            <td><b>Напочвенный покров (мощность см)</b></td>
                            <td>Травянистая дернина (2 см)</td>
                        </tr>
                        <tr>
                            <td><b>Диапазон межгодовой изменчивости максимальной высоты снежного покрова, см)</b></td>
                            <td>25-50</td>
                        </tr>
                        <tr>
                            <td><b>Лаборатория (ответственный за проведение мониторинга)</b></td>
                            <td>ЛКЛ (П.Я.Константинов)</td>
                        </tr>
                    </table>
                    <div>
                        <a href="well12.txt" download="well12.txt">
                            <button className={classes.buttonWells}><b>Скачать</b></button>
                        </a>
                    </div>
                </div>
            </Popup>
        </Marker>

    );
}

export default Marker12;