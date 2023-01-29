import axios from 'axios'
import React from 'react'
import Rezalt from '../rezalt/Rezalt'
import styles from './search.module.css'
class Search extends React.Component {
    constructor(props){
        super(props)
        this.state={
            search:'',
            weather:null,
            city: null,
            apiKey: "986b8fe216175b5220a56aaa7eb7303c"
        }
        this.handleSearch=this.handleSearch.bind(this)
    }
     handleSearch= (e)=>{
        this.setState({
            search:e.target.value
        })
    }
    handleSubmit= async (e)=>{
        e.preventDefault()
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.search}&lang=ru&appid=${this.state.apiKey}`)
            const data = await response.data
            await this.setState({
                weather:data.list,
                city: data.city,
            })
        }
        catch(e){
            alert("Город не найден\n"+e.response.data.message)
        } 
    }
    render() {
        return (
        <div>
            <form className={styles.form} action="">
                <input className={styles.input} type="text" onChange={this.handleSearch} placeholder="Город" />
                <button className={styles.button} onClick={e=>{this.handleSubmit(e)}}>Поиск</button>
            </form>
            <h1>{this.state.city?.name}</h1>
            {this.state.weather?.filter(item =>
            {
                if (item.dt_txt.includes('09:00') || item.dt_txt.includes('15:00') || item.dt_txt.includes('21:00')) return item
                else return false
            }).map(item => (
                <Rezalt key={item.dt_txt} item={item} />)
            )}  
        </div>
        )
  }
}
export default Search