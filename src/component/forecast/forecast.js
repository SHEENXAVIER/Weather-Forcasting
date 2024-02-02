import { Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
import './forecast.css';


const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const ForeCast = ({ data }) => {

    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInWeek)
    );

    console.log(forecastDays);
    return (
        <>
            <label className="title">Upcoming Days</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, indx) => (
                    <AccordionItem key={indx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="dialy-item">
                                <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />

                                    <label className="days">{forecastDays[indx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_max)}°C | {Math.round(item.main.temp_min)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Celcius:</label>
                                    <label>{Math.round(item.main.temp_max)}°C </label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    );
}
export default ForeCast;