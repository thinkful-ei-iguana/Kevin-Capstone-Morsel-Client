import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecipeListContext from '../../contexts/RecipeListContext';
import RecipeApiService from '../../services/recipe-api-service';
import LoggedInHeader from '../Logged-In-Header/Logged-In-Header';

export default class Menu extends Component {
    static contextType = RecipeListContext

    state = {
        selectedRecipes: [],
        sunBrk: null,
        sunLun: null,
        sunDin: null,
        monBrk: null,
        monLun: null,
        monDin: null,
        tueBrk: null,
        tueLun: null,
        tueDin: null,
        wedBrk: null,
        wedLun: null,
        wedDin: null,
        thuBrk: null,
        thuLun: null,
        thuDin: null,
        friBrk: null,
        friLun: null,
        friDin: null,
        satBrk: null,
        satLun: null,
        satDin: null
    }

    updateRecipes = () => {
        this.context.clearError()
        RecipeApiService.getRecipes()
          .then(this.context.setRecipeList)
          .catch(this.context.setError)
    }

    setSelectOptions = () => {
        return this.context.recipeList.map(recipe => {
            return <option key={recipe.id} value={recipe.id}>{recipe.title}</option>
        })
    }

    setSunBrk = (e) => {
        let selectedRecipe = e.target.value
        this.setState({ sunBrk: selectedRecipe })
    }

    setSelectedRecipes = (e) => {
        let selectedRecipes = [this.state.sunBrk, this.state.sunLun, this.state.sunDin, this.state.monBrk, this.state.monLun, this.state.monDin, this.state.tueBrk, this.state.tueLun, this.state.tueDin, this.state.wedBrk, this.state.wedLun, this.state.wedDin, this.state.thuBrk, this.state.thuLun, this.state.thuDin, this.state.friBrk, this.state.friLun, this.state.friDin, this.state.satBrk, this.state.satLun, this.state.satDin]
        if (e.target.name==="sunday-breakfast") {
            this.setState({ sunBrk: e.target.value })
        } else if (e.target.name==="sunday-lunch") {
            this.setState({ sunLun: e.target.value })
        } else if (e.target.name==="sunday-dinner") {
            this.setState({ sunDin: e.target.value })
        } else if (e.target.name==="monday-breakfast") {
            this.setState({ monBrk: e.target.value })
        } else if (e.target.name==="monday-lunch") {
            this.setState({ monLun: e.target.value })
        } else if (e.target.name==="monday-dinner") {
            this.setState({ monDin: e.target.value })
        } else if (e.target.name==="tuesday-breakfast") {
            this.setState({ tueBrk: e.target.value })
        } else if (e.target.name==="tuesday-lunch") {
            this.setState({ tueLun: e.target.value })
        } else if (e.target.name==="tuesday-dinner") {
            this.setState({ tueDin: e.target.value })
        } else if (e.target.name==="wednesday-breakfast") {
            this.setState({ wedBrk: e.target.value })
        } else if (e.target.name==="wednesday-lunch") {
            this.setState({ wedLun: e.target.value })
        } else if (e.target.name==="wednesday-dinner") {
            this.setState({ wedDin: e.target.value })
        } else if (e.target.name==="thursday-breakfast") {
            this.setState({ thuBrk: e.target.value })
        } else if (e.target.name==="thursday-lunch") {
            this.setState({ thuLun: e.target.value })
        } else if (e.target.name==="thursday-dinner") {
            this.setState({ thuDin: e.target.value })
        } else if (e.target.name==="friday-breakfast") {
            this.setState({ friBrk: e.target.value })
        } else if (e.target.name==="friday-lunch") {
            this.setState({ friLun: e.target.value })
        } else if (e.target.name==="friday-dinner") {
            this.setState({ friDin: e.target.value })
        } else if (e.target.name==="saturday-breakfast") {
            this.setState({ satBrk: e.target.value })
        } else if (e.target.name==="saturday-lunch") {
            this.setState({ satLun: e.target.value })
        } else if (e.target.name==="saturday-dinner") {
            this.setState({ satDin: e.target.value })
        }
        this.setState({ selectedRecipes: selectedRecipes })
    }
5
    /*
    setSelectedRecipes = (e) => {
        let selectedRecipe = e.target.value
        let recipeArry = this.state.selectedRecipes
        recipeArry.push(selectedRecipe)
        this.setState({ selectedRecipes: recipeArry })
    }
    */

    componentDidMount() {
        this.updateRecipes()
    }

    render() {

        console.log(this.context.recipeList)
        return (
            <div>
                <LoggedInHeader/>
                <div>
                    <section className="sunday">
                    <h2>Sunday</h2>
                    <div className="breakfast">
                        <form>
                            <label htmlFor="sunday-breakfast">Breakfast: </label>
                            <select name="sunday-breakfast" id="sunday-breakfast" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                        </form>
                    </div>
                    <div className="lunch">
                        <form>
                            <label htmlFor="sunday-lunch">Lunch: </label>
                            <select name="sunday-lunch" id="sunday-lunch" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                        </form>
                    </div>
                    <div className="dinner">
                        <form>
                            <label htmlFor="sunday-dinner">Dinner: </label>
                            <select name="sunday-dinner" id="sunday-dinner" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                        </form>
                    </div>
                </section>
                <section className="monday">
                    <h2>Monday</h2>
                    <div className="breakfast">
                            <form>
                                <label htmlFor="monday-breakfast">Breakfast: </label>
                                <select name="monday-breakfast" id="monday-breakfast" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                        <div className="lunch">
                            <form>
                                <label htmlFor="monday-lunch">Lunch: </label>
                                <select name="monday-lunch" id="monday-lunch" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                        <div className="dinner">
                            <form>
                                <label htmlFor="monday-dinner">Dinner: </label>
                                <select name="monday-dinner" id="monday-dinner" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                </section>
                <section className="tuesday">
                    <h2>Tuesday</h2>
                    <div className="breakfast">
                            <form>
                                <label htmlFor="tuesday-breakfast">Breakfast: </label>
                                <select name="tuesday-breakfast" id="tuesday-breakfast" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                        <div className="lunch">
                            <form>
                                <label htmlFor="tuesdaylunch">Lunch: </label>
                                <select name="tuesday-lunch" id="tuesday-lunch" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                        <div className="dinner">
                            <form>
                                <label htmlFor="tuesday-dinner">Dinner: </label>
                                <select name="tuesday-dinner" id="tuesday-dinner" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                </section>
                <section className="wednesday">
                    <h2>Wednesday</h2>
                    <div className="breakfast">
                            <form>
                                <label htmlFor="wednesday-breakfast">Breakfast: </label>
                                <select name="wednesday-breakfast" id="wednesday-breakfast" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                        <div className="lunch">
                            <form>
                                <label htmlFor="wednesday-lunch">Lunch: </label>
                                <select name="wednesday-lunch" id="wednesday-lunch" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                        <div className="dinner">
                            <form>
                                <label htmlFor="wednesday-dinner">Dinner: </label>
                                <select name="wednesday-dinner" id="wednesday-dinner" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                </section>
                <section className="thursday">
                    <h2>Thursday</h2>
                    <div className="breakfast">
                            <form>
                                <label htmlFor="thursday-breakfast">Breakfast: </label>
                                <select name="thursday-breakfast" id="thursday-breakfast" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                        <div className="lunch">
                            <form>
                                <label htmlFor="thursday-lunch">Lunch: </label>
                                <select name="thursday-lunch" id="thursday-lunch" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                        <div className="dinner">
                            <form>
                                <label htmlFor="thursday-dinner">Dinner: </label>
                                <select name="thursday-dinner" id="thursday-dinner" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                </section>
                <section className="friday">
                    <h2>Friday</h2>
                    <div className="breakfast">
                            <form>
                                <label htmlFor="friday-breakfast">Breakfast: </label>
                                <select name="friday-breakfast" id="friday-breakfast" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                        <div className="lunch">
                            <form>
                                <label htmlFor="friday-lunch">Lunch: </label>
                                <select name="friday-lunch" id="friday-lunch" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                        <div className="dinner">
                            <form>
                                <label htmlFor="friday-dinner">Dinner: </label>
                                <select name="friday-dinner" id="friday-dinner" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                </section>
                <section className="saturday">
                    <h2>Saturday</h2>
                    <div className="breakfast">
                            <form>
                                <label htmlFor="saturday-breakfast">Breakfast: </label>
                                <select name="saturday-breakfast" id="saturday-breakfast" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                        <div className="lunch">
                            <form>
                                <label htmlFor="saturday-lunch">Lunch: </label>
                                <select name="saturday-lunch" id="saturday-lunch" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                        <div className="dinner">
                            <form>
                                <label htmlFor="saturday-dinner">Dinner: </label>
                                <select name="saturday-dinner" id="saturday-dinner" defaultValue={{label: "Select Meal", value: 0}} onChange={this.setSelectedRecipes}>
                                <option value="0">Select Meal</option>
                                {this.setSelectOptions()}
                                </select>
                            </form>
                        </div>
                </section>
            </div>
            <Link to='/shopping-list'>
                    <button>View Shopping List</button>
            </Link>
        </div>
        )
    }
}