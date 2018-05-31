import React, {Component} from 'react';
import LinksList from './LinksList';
import LinkCreateForm from './LinkCreateForm';
import Filter from './Filter';

const uuidv4 = require('uuid/v4');

class Links extends Component {

  constructor(props) {
    super(props);

    this.state = {
      links: [
        {
          id: 'e8956e97-e4b6-4d8a-b130-dcf8dea4980f',
          text: 'www.google.com',
          tags: ['website'],
          createdAt: '1527599546716',
          deferByTime: '2018-06-01T08:30',
          status: 'DONE' // DONE, OK, EXPIRED
        }, {
          id: 'b9912bb1-b988-45cf-9726-088a71d22e4d',
          text: 'www.twitter.com',
          tags: [2],
          createdAt: '1527599546716',
          deferByTime: '2018-05-29T08:30',
          status: 'OK'
        }
      ],


      fields: "aaaaaa",

      filterByTag: ""
    }
  }


  editFunction = (e) => {


  console.log(e.link)

    this.setState({
        fields : e.link.text
    })
  }

  onSave = (data) => {
    this.setState({
      links: [
        ...this.state.links, {
          ...data,
          id: uuidv4(),
          createdAt: Date.now(),
          status: 'OK'
        }
      ]
    }, () => {})

  };

  filterComplete = () => {

    let filteredLinks = this.state.links.filter((eachLink) => {

      return eachLink.text.includes(this.state.filterByTag)
    })

    if (filteredLinks.length == 0) {
      return this.state.links
    } else {
      return filteredLinks
    }

  }




  doneFunction = (e) => {

    this.state.links

    let newArray = this.state.links.filter((eachLink) => {

      return !eachLink.id.includes(e.link.id)
    })
    console.log(newArray)

    this.setState({links: newArray})

  }





  checkFilter = (filterData) => {

    this.setState({filterByTag: filterData})

  }

  onLinkExpired = (id) => {
    console.log('link expired called ', id);
    this.setState((currentState) => {
      const links = currentState.links.map((link) => {
        if (link.id === id) {
          link.status = 'EXPIRED';
        }
        return link;
      });
      return {links};
    }, () => {
      console.log(this.state)
    });
  };

  render() {
    return (<div>
      <LinkCreateForm  fields={this.state.fields}  editFunction={this.editFunction}  onSave={this.onSave}/>
      <Filter filter={this.checkFilter}/>
      <LinksList doneFunction={this.doneFunction} editFunction={this.editFunction} links={this.filterComplete()} onLinkExpired={this.onLinkExpired}/>
    </div>)
  }
}

export default Links;
