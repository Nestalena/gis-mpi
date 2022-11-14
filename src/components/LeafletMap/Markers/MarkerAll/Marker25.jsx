import React from 'react';
import classes from './Markers.module.css';
import { Marker} from "react-leaflet";
import { Popup } from 'react-leaflet';


const Marker25 = (props) => {
    return (
        <Marker position={[63.38169, 119.46376]}>
            <Popup>
                <div>
                    <table className={classes.tableWells}>
                        <tr>
                            <td><b>№ Скважины</b></td>
                            <td>J2</td>
                        </tr>
                        <tr>
                            <td><b>Регион</b></td>
                            <td>Центральная Якутия</td>
                        </tr>
                        <tr>
                            <td><b>Физико-географическая область</b></td>
                            <td>Центральноякутская равнина</td>
                        </tr>
                        <tr>
                            <td><b>Период наблюдений, годы</b></td>
                            <td>2012-2021</td>
                        </tr>
                        <tr>
                            <td><b>Абсолютная высота, м</b></td>
                            <td>129</td>
                        </tr>
                        <tr>
                            <td><b>Глубина скважины, м</b></td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td><b>Диапазон межгодовой изменчивости средней годовой температуры грунта на подошве СТС</b></td>
                            <td>-1,3...-2,6</td>
                        </tr>
                        <tr>
                            <td><b>Среднее многолетнее значение мощности СТС, м</b></td>
                            <td>1,3</td>
                        </tr>
                        <tr>
                            <td><b>Состав грунта СТС</b></td>
                            <td>Супеси, пески</td>
                        </tr>
                        <tr>
                            <td><b>Состав грунта ММП (объемная льдистость в %) </b></td>
                            <td>Супеси, пески (10%)</td>
                        </tr>
                        <tr>
                            <td><b>Элемент мезорельефа</b></td>
                            <td>Привершинная поверхность пологого увала</td>
                        </tr>
                        <tr>
                            <td><b>Растительный покров</b></td>
                            <td>Березово-лиственничный лес брусничный</td>
                        </tr>
                        <tr>
                            <td><b>Напочвенный покров (мощность см)</b></td>
                            <td>Лесная подстилка (5 см)</td>
                        </tr>
                        <tr>
                            <td><b>Диапазон межгодовой изменчивости максимальной высоты снежного покрова, см)</b></td>
                            <td>30-55</td>
                        </tr>
                        <tr>
                            <td><b>Лаборатория (ответственный за проведение мониторинга)</b></td>
                            <td>ЛКЛ (П.Я.Константинов)</td>
                        </tr>
                    </table>
                    <div>
                        <a href="well25.txt" download="well25.txt">
                            <button className={classes.buttonWells}><b>Скачать</b></button>
                        </a>
                    </div>
                </div>
            </Popup>
        </Marker>


    );
}

export default Marker25;