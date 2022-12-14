import React from 'react';
import classes from './Markers.module.css';
import { Marker} from "react-leaflet";
import { Popup } from 'react-leaflet';


const Marker1 = (props) => {
    return (
        <Marker position={[71.351266, 128.463738]}>
            <Popup>
                <div>
                    <table className={classes.tableWells}>
                        <tr>
                            <td><b>№ Скважины</b></td>
                            <td>Тикси-30</td>
                        </tr>
                        <tr>
                            <td><b>Регион</b></td>
                            <td>Арктическая Якутия</td>
                        </tr>
                        <tr>
                            <td><b>Физико-географическая область</b></td>
                            <td>Прибрежная часть Хараулахского хребта</td>
                        </tr>
                        <tr>
                            <td><b>Период наблюдений, годы</b></td>
                            <td>1992-2017, 2020-2021</td>
                        </tr>
                        <tr>
                            <td><b>Абсолютная высота, м</b></td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td><b>Глубина скважины, м</b></td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td><b>Диапазон межгодовой изменчивости средней годовой температуры грунта на подошве СТС</b></td>
                            <td>-8,9...-12,0</td>
                        </tr>
                        <tr>
                            <td><b>Температура грунта в нижней части слоя годовых теплооборотов (глубина, м)</b></td>
                            <td>-10,7 (30)</td>
                        </tr>
                        <tr>
                            <td><b>Среднее многолетнее значение мощности СТС, м</b></td>
                            <td>1,2</td>
                        </tr>
                        <tr>
                            <td><b>Состав грунта СТС</b></td>
                            <td>Глыбы, щебень, дресва</td>
                        </tr>
                        <tr>
                            <td><b>Состав грунта ММП (объемная льдистость в %) </b></td>
                            <td>Аргиллиты трещиноватые и плотные (менее 5%)</td>
                        </tr>
                        <tr>
                            <td><b>Элемент мезорельефа</b></td>
                            <td>Привершинная поверхность невысокой горной гряды</td>
                        </tr>
                        <tr>
                            <td><b>Растительный покров</b></td>
                            <td>Горная дриадово-лишайниковая тундра</td>
                        </tr>
                        <tr>
                            <td><b>Напочвенный покров (мощность см)</b></td>
                            <td>Осутствует</td>
                        </tr>
                        <tr>
                            <td><b>Диапазон межгодовой изменчивости максимальной высоты снежного покрова, см)</b></td>
                            <td>0-10</td>
                        </tr>
                        <tr>
                            <td><b>Лаборатория (ответственный за проведение мониторинга)</b></td>
                            <td>ЛКЛ (П.Я.Константинов)</td>
                        </tr>
                    </table>
                    <div>
                        <a href="well1.txt" download="well1.txt">
                            <button className={classes.buttonWells}><b>Скачать</b></button>
                        </a>
                    </div>
                </div>
            </Popup>
        </Marker>

    );
}

export default Marker1;