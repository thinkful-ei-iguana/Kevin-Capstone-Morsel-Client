import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoggedInHeader from '../Logged-In Header/Logged-In_Header';

export default class Menu extends Component {

    render() {
        return (
            <div>
                <LoggedInHeader/>
                <Link to='/shopping-list'>
                    <button>View Shopping List</button>
                </Link>
                <div>
                    <section className="sunday first">
                    <h2>Sunday</h2>
                    <div className="breakfast">
                        <form>
                            <label htmlFor="sunday-breakfast">Breakfast: </label>
                            <select name="sunday-breakfast" id="sunday-breakfast"></select>
                        </form>
                    </div>
                    <div className="lunch">
                        <form>
                            <label htmlFor="sunday-lunch">Lunch: </label>
                            <select name="sunday-lunch" id="sunday-lunch"></select>
                        </form>
                    </div>
                    <div className="dinner">
                        <form>
                            <label htmlFor="sunday-dinner">Dinner: </label>
                            <select name="sunday-dinner" id="sunday-dinner"></select>
                        </form>
                    </div>
                </section>
                <section className="monday">
                    <h2>Monday</h2>
                    <div className="breakfast">
                            <form>
                                <label htmlFor="monday-breakfast">Breakfast: </label>
                                <select name="monday-breakfast" id="monday-breakfast"></select>
                            </form>
                        </div>
                        <div className="lunch">
                            <form>
                                <label htmlFor="monday-lunch">Lunch: </label>
                                <select name="monday-lunch" id="monday-lunch"></select>
                            </form>
                        </div>
                        <div className="dinner">
                            <form>
                                <label htmlFor="monday-dinner">Dinner: </label>
                                <select name="monday-dinner" id="monday-dinner"></select>
                            </form>
                        </div>
                </section>
                <section className="tuesday">
                    <h2>Tuesday</h2>
                    <div className="breakfast">
                            <form>
                                <label htmlFor="tuesday-breakfast">Breakfast: </label>
                                <select name="tuesday-breakfast" id="tuesday-breakfast"></select>
                            </form>
                        </div>
                        <div className="lunch">
                            <form>
                                <label htmlFor="tuesdaylunch">Lunch: </label>
                                <select name="tuesday-lunch" id="tuesday-lunch"></select>
                            </form>
                        </div>
                        <div className="dinner">
                            <form>
                                <label htmlFor="tuesday-dinner">Dinner: </label>
                                <select name="tuesday-dinner" id="tuesday-dinner"></select>
                            </form>
                        </div>
                </section>
                <section className="wednesday">
                    <h2>Wednesday</h2>
                    <div className="breakfast">
                            <form>
                                <label htmlFor="wednesday-breakfast">Breakfast: </label>
                                <select name="wednesday-breakfast" id="wednesday-breakfast"></select>
                            </form>
                        </div>
                        <div className="lunch">
                            <form>
                                <label htmlFor="wednesday-lunch">Lunch: </label>
                                <select name="wednesday-lunch" id="wednesday-lunch"></select>
                            </form>
                        </div>
                        <div className="dinner">
                            <form>
                                <label htmlFor="wednesday-dinner">Dinner: </label>
                                <select name="wednesday-dinner" id="wednesday-dinner"></select>
                            </form>
                        </div>
                </section>
                <section className="thursday">
                    <h2>Thursday</h2>
                    <div className="breakfast">
                            <form>
                                <label htmlFor="thursday-breakfast">Breakfast: </label>
                                <select name="thursday-breakfast" id="thursday-breakfast"></select>
                            </form>
                        </div>
                        <div className="lunch">
                            <form>
                                <label htmlFor="thursday-lunch">Lunch: </label>
                                <select name="thursday-lunch" id="thursday-lunch"></select>
                            </form>
                        </div>
                        <div className="dinner">
                            <form>
                                <label htmlFor="thursday-dinner">Dinner: </label>
                                <select name="thursday-dinner" id="thursday-dinner"></select>
                            </form>
                        </div>
                </section>
                <section className="friday">
                    <h2>Friday</h2>
                    <div className="breakfast">
                            <form>
                                <label htmlFor="friday-breakfast">Breakfast: </label>
                                <select name="friday-breakfast" id="friday-breakfast"></select>
                            </form>
                        </div>
                        <div className="lunch">
                            <form>
                                <label htmlFor="friday-lunch">Lunch: </label>
                                <select name="friday-lunch" id="friday-lunch"></select>
                            </form>
                        </div>
                        <div className="dinner">
                            <form>
                                <label htmlFor="friday-dinner">Dinner: </label>
                                <select name="friday-dinner" id="friday-dinner"></select>
                            </form>
                        </div>
                </section>
                <section className="saturday">
                    <h2>Saturday</h2>
                    <div className="breakfast">
                            <form>
                                <label htmlFor="saturday-breakfast">Breakfast: </label>
                                <select name="saturday-breakfast" id="saturday-breakfast"></select>
                            </form>
                        </div>
                        <div className="lunch">
                            <form>
                                <label htmlFor="saturday-lunch">Lunch: </label>
                                <select name="saturday-lunch" id="saturday-lunch"></select>
                            </form>
                        </div>
                        <div className="dinner">
                            <form>
                                <label htmlFor="saturday-dinner">Dinner: </label>
                                <select name="saturday-dinner" id="saturday-dinner"></select>
                            </form>
                        </div>
                </section>
            </div>
        </div>
        )
    }
}