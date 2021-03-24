import axios from 'axios';
import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        const { steps } = this.props;
        const { name, city, date, email } = steps;

        this.state = { name, city, date, email };
    }

    componentDidMount() {

        const api = axios.create({
            baseURL: "https://605a60b027f0050017c04dc0.mockapi.io",
        });

        const userObject = {
            name: this.state.name.value,
            city: this.state.city.value,
            date: this.state.date.value,
            email: this.state.email.value,
        };
        api.post(`/users`, userObject)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>Muito obrigado, suas informações foram enviadas</div>
        );
    }
};


export default Post;