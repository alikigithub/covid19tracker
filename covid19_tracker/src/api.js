


export async function fetchData(countryval) {
    let seturl = 'https://covid19.mathdro.id/api/';
    if (countryval) {
        seturl = 'https://covid19.mathdro.id/api/countries/'+countryval;
    }
    try {

        const api = await fetch(seturl);
        const apijson = await api.json();
        const { confirmed, recovered, deaths, lastUpdate } = apijson;

        return { confirmed, recovered, deaths, lastUpdate };

    }
    catch (error) {

    }
}
export async function fetchDailyData() {
    try {

        const api = await fetch('https://covid19.mathdro.id/api/daily');
        const apijson = await api.json();
        const modifieddata = apijson.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));

        return modifieddata;

    }
    catch (error) {

    }
}
export async function fetchcountry() {
    try {
        const api = await fetch('https://covid19.mathdro.id/api/countries')
        const apijson = await api.json();
        const { countries } = apijson;
        return countries.map((abc) => abc.name);
    }
    catch (error) {

    }

}