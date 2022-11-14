import React from 'react';
import classes from './Markers.module.css';
import { Marker} from "react-leaflet";
import { Popup } from 'react-leaflet';


const Marker21 = (props) => {
    return (
        <Marker position={[62.15120, 129.37010]}>
            <Popup>
                <div>
                    <table className={classes.tableWells}>
                        <tr>
                            <td><b>№ Скважины</b></td>
                            <td>2</td>
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
                            <td>1996-2021</td>
                        </tr>
                        <tr>
                            <td><b>Абсолютная высота, м</b></td>
                            <td>219</td>
                        </tr>
                        <tr>
                            <td><b>Глубина скважины, м</b></td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td><b>Диапазон межгодовой изменчивости средней годовой температуры грунта на подошве СТС</b></td>
                            <td>-0,6...-2,3</td>
                        </tr>
                        <tr>
                            <td><b>Среднее многолетнее значение мощности СТС, м</b></td>
                            <td>1,9</td>
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
                            <td>Верхняя часть пологого склона</td>
                        </tr>
                        <tr>
                            <td><b>Растительный покров</b></td>
                            <td>Лиственнично-березовый лес разнотравно-брусничный</td>
                        </tr>
                        <tr>
                            <td><b>Напочвенный покров (мощность см)</b></td>
                            <td>Лесная подстилка (3 см)</td>
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
                        <a href="well21.txt" download="well21.txt">
                            <button className={classes.buttonWells}><b>Скачать</b></button>
                        </a>
                    </div>
                </div>
            </Popup>
        </Marker>


    );
}

export default Marker21;