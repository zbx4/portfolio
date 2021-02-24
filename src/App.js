import React, {Component} from 'react';
import './App.css';
import {Helmet} from "react-helmet";
import Header from './components/landing/Header';
import Services from './components/landing/Services';
import Bar from './components/Bar';
import Projects from './components/landing/Projects';
import Contact from './components/landing/Contact';
import Skills from './components/landing/Skills';

class App extends Component {

  url='';

  state = {
    services: [
      {
        id: 1,
        title: 'Web Development',
        description: 'Custom web applications to turn your startup or project idea into a reality',
        image: 'ic_laptop.png',
        color: '#8a8a8a'
      },
      {
        id: 2,
        title: 'Mobile Development',
        description: 'Cross-platform applications and native Android development',
        image: 'ic_phone.png',
        color: '#28a831'
      },
      {
        id: 3,
        title: 'Wordpress Development',
        description: 'Get a web page for your business or organization, start a personal blog, etc',
        image: 'ic_wordpress.png',
        color: '#5190f5'
      },
      {
        id: 4,
        title: 'Machine Learning',
        description: 'Make use of machine learning to improve your business and get insights from data',
        image: 'ic_ml.png',
        color: '#e80000'
      }
    ],
    projects: [
      {
        id: 21,
        title: 'Money Manager',
        description: 'Native Android Application for personal finances. The App helps users take control over their money by keeping track of expenses, bills, budgets, savings, debts and loans. The App also offers reports to know where their money goes.',
        image: 'proj1.png',
        projectLink: 'https://play.google.com/store/apps/details?id=com.sharkmoney&hl=en',
        visitEnabled: true
      },
      {
        id: 22,
        title: 'Fitness Tracker',
        description: 'Mobile friendly web application to help people achieve their fitness goals and improve their health. Users can track their calories and workouts and see their progress based on their own goals.',
        image: 'proj2.png',
        projectLink: '',
        visitEnabled: true
      },
      {
        id: 23,
        title: 'Sign Interpreter',
        description: "Mobile application with machine learning technology that helps the average person to understand the sign language. A deep neural network is used to identify images of signs captured with the mobile device's camera.",
        image: 'proj3.png',
        projectLink: '',
        visitEnabled: false
      }
    ],
    skills:[
      {
        id: 51,
        title: 'java',
        image: 'zic_java.png'
      },
      {
        id: 52,
        title: 'python',
        image: 'zic_python.png'
      },
      {
        id: 53,
        title: 'javascript',
        image: 'zic_javascript.png'
      },
      {
        id: 54,
        title: 'typescript',
        image: 'zic_typescript.png'
      },
      {
        id: 55,
        title: 'angular',
        image: 'zic_angular.png'
      },
      {
        id: 56,
        title: 'spring',
        image: 'zic_spring.png'
      },
      {
        id: 57,
        title: 'mysql',
        image: 'zic_mysql.png'
      },
      {
        id: 58,
        title: 'android',
        image: 'zic_android.png'
      },
      {
        id: 59,
        title: 'html',
        image: 'zic_html.png'
      },
      {
        id: 60,
        title: 'css',
        image: 'zic_css.png'
      },
      {
        id: 61,
        title: 'wordpress',
        image: 'zic_wordpress.png'
      },
      {
        id: 62,
        title: 'ionic',
        image: 'zic_ionic.png'
      },
      {
        id: 63,
        title: 'hibernate',
        image: 'zic_hibernate.png'
      },
      {
        id: 64,
        title: 'selenium',
        image: 'zic_selenium.png'
      },
      {
        id: 65,
        title: 'react',
        image: 'zic_react.png'
      },
      {
        id: 66,
        title: 'tensorflow',
        image: 'zic_tensorflow.png'
      }
    ]
  };

  /*
  sendData = (data) => {
    axios.post(url, {
        data
    }).then((res) => {
      console.log("data sent!");
    });
  }*/
  
  render(){
    return (
      <div className="App">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Portfolio</title>
        </Helmet>
        <Bar />
        <Header />
        <Services services = {this.state.services}/>
        <Projects projects={this.state.projects} />
        <Skills skills = {this.state.skills}/>
        <Contact/>
      </div>
    );
  }
}

export default App;