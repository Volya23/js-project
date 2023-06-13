/*const teacher = {
    name: 'МарьІванна',
    nickname: 'Snowman',
    subject: 'математика',
    teach: function () {
        return 'I am teaching';
    }

}*/
 
function Country(name, population, capital, area) {
    this.name = name;
    this.population = population;
    this.capital = capital;
    this.area = area;

    this.getDensity = function() {
        return this.population / this.area;
    }
}
const Ukraine = new Country('Ukraine', 36744636, 'Kyiv', 603628);
console.log(Ukraine.getDensity());
