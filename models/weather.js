import axios from 'axios';
import { proxy } from '../config';

export default class Weather {
    constructor(id) {
        this.id = id;
    }

    async getWeather() {
        try {
            const res = await axios(`http://api.weatherapi.com/v1/current.json?key=${key}&q=London
            `);
            // Show region?
            this.region = res.data.weather.region;
            //Show local time?
            this.localtime = res.data.weather.localtime;
            //Show weather text?
            this.condition = res.data.weather.condition;

            this.url = res.data.weather.source_url;

        } catch (error) {
            console.log(error);
            alert('Something went wrong :(');
        }
    }

}