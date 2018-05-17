import React, { Component } from 'react';
import actions from '../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

@connect((state) => state)
class EditMeetup extends Component {

  state = {
    filter: {
      name: '',
      city: '',
      address: ''
    }
  }

  componentWillMount() {
    let meetupId = this.props.match.params.id;
    actions.fetchMeetupsById(meetupId).then(() => {
      let { filter } = this.state;
      const { meetupDetails } = this.props.fetchmeetups;
      filter['name'] = meetupDetails.name;
      filter['city'] = meetupDetails.city;
      filter['address'] = meetupDetails.address;
      this.setState({filter})
    });
  }

  onChange = (key, e) => {
    let { filter } = this.state;
    filter[key] = e.target.value;
    this.setState({ filter });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {filter} = this.state;
    const newMeetup = {
      name: filter.name,
      city: filter.city,
      address: filter.address
    }
    actions.editMeetups(this.props.match.params.id, newMeetup).then(() => {
      this.props.history.push('/')
    }).catch((err) => console.log(err));
  }

  render() {
    
    return (
      <div>
        <br />
        <Link to="/" className="btn grey">Back</Link>
        <h1>Edit Meetup</h1>
        <form onSubmit={this.onSubmit}>
          <div className="input-field">
            <input type="text" name="name"
            value={this.state.filter.name}
            onChange={this.onChange.bind(this, 'name')}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="city" 
            value={this.state.filter.city}
            onChange={this.onChange.bind(this, 'city')}
            />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field">
            <label htmlFor="address">Address</label>
            <input type="text" 
            name="address" 
            value={this.state.filter.address} 
            onChange={this.onChange.bind(this, 'address')}
            />
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    );
  }
}

export default EditMeetup;