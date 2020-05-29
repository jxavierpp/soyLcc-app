import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import AsignatureCard from './components/AsignatureCard'

const Ejes = {
  BASICO: 0,
  COMUN: 1,
  PROFESIONAL: 2,
  ESPECIALIZANTE: 3,
  INTEGRADOR: 4
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }

  }

  loadData() {
    fetch('http://www.mocky.io/v2/5ed0d4533500004a00ff9f9e')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ data: data })
      })
      .catch(err => console.error(this.props.url, err.toString()))
  }

  componentDidMount() {
    this.loadData()
  }

  renderAsignaturas(materias) {
    const items = [];
    for (const [index, materia] of materias.entries()) {
      let color;
      if(materia.eje === Ejes.BASICO) {
        color = "#E8EEF7";
      }
      if(materia.eje === Ejes.COMUN) {
        color = "#FFFF66";
      }
      if(materia.eje === Ejes.PROFESIONAL) {
        color = "#FF9966";
      }
      if(materia.eje === Ejes.ESPECIALIZANTE) {
        color = "#99FF66";
      }
      if(materia.eje === Ejes.INTEGRADOR) {
        color = "#9966FF";
      }
      items.push(<div className="col" key={index} style={{backgroundColor: color}}><p>{materia.asignatura}</p></div>)
    }
    return items;
  }

  render() {
    return (
      <Container fluid>
        <div className="container1">
          { 
            this.state.data.map((materias, i) => {
              return ( 
                <div className="row1" key={i} >
                  { 
                    this.renderAsignaturas(materias)
                  }
                </div>
              )
            })
          }
        </div>
        <div className="menu">
          as
        </div>
      </Container>
    )
  }

  // render() {
  //   return(
  //     <div className={this.classes.root}>
  //       <Grid container spacing={3}>
  //         { 
  //           this.state.data.map((materias, i) => {
  //             return ( 
  //               <Grid item xs={1} key={i} >
  //                 { 
  //                   this.renderAsignaturas(materias)
  //                 }
  //               </Grid>
  //             )
  //           })
  //         }
  //       </Grid>
  //     </div>
  //   )
  // }
}