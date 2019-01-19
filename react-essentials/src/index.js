import React, { Component } from 'react';
import { render } from 'react-dom';

let skiData = { 
    total: 50,
    powder: 20,
    backCountry: 10,
    goal: 100
};

class SkiDayCounter extends Component {
    render() {
        const {total, powder, backCountry, goal} = this.props;
        return (
            <section>
                <div>
                    <p>
                        Total days: {total}
                    </p>
                </div>
                <div>
                    <p>
                        Powder: {powder}
                    </p>
                </div>
                <div>
                    <p>
                        Back Country: {backCountry}
                    </p>
                </div>
                <div>
                    <p>
                        Goal: {goal}
                    </p>
                </div>
            </section>
        )
    }
}

render(
    <SkiDayCounter
        total={skiData.total}
        powder={skiData.powder}
        backCountry={skiData.backCountry}
        goal={skiData.goal}/>,
    document.getElementById('root')
)