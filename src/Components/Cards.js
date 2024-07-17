import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchCarddata } from './CardSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import CloseButton from 'react-bootstrap/CloseButton';
import Profile from './Profile'
import { ListGroup } from 'react-bootstrap'

function Cards() {
    
    const carddata = useSelector((state) => state.cards.cards)
    const [cardvalues, setcardvalues] = useState([])
    const [togglecards, settogglecards] = useState(true)
    const disptach = useDispatch()
    const [currentPage,setcurrentPage] = useState(0)
    const itemperpage = 6
    const startindex = currentPage 
    const endindex = startindex + itemperpage
    const curentcards = cardvalues.slice(startindex,endindex)

    useEffect(() => {
        disptach(fetchCarddata())
    }, [])

    useEffect(() => {
        if (carddata) {
            setcardvalues(carddata)
        }
    }, [carddata])


    const deletecard = (id) => {
        let deletedata = cardvalues.filter((value) => {
            return value.id != id
        })
        setcardvalues(deletedata)
    }

    const cardstogglebtn = () => {
       
        settogglecards(true)
    }

    const listtogglebtn = () => {
        settogglecards(false)
    }

    const handlePagechange = (pageindex) =>{
       setcurrentPage(pageindex)
     }



    return (
        <div style={{ marginLeft: '30%' }}>
            <Profile  listtogglebtn={listtogglebtn} cardstogglebtn={cardstogglebtn} />
            <Row md={3}  >

                {togglecards ?
                    curentcards.map((values) => {
                        return (
                            
                                <Col key={values.id}>
                                    <Card>
                                        <CloseButton style={{ marginLeft: '90%', Color: 'red' }} onClick={() => deletecard(values.id)} />
                                        <Card.Body>
                                        
                                            <Card.Title>{values.title}</Card.Title>
                                            <Card.Text>
                                                {values.body}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                        )
                    })
                        :    
                        curentcards.map((values) => {
                        return(
                            <ListGroup>
                            <ListGroup.Item>
                            {values.title}
                            <CloseButton style={{marginLeft:'40px'}} onClick={() => deletecard(values.id)} />
                            </ListGroup.Item>
                           </ListGroup>
                        )
                           
                    })
                }
            </Row>
                      <button onClick={()=>handlePagechange(currentPage-1)} disabled={currentPage===0}>prev</button>
                      <button onClick={()=>handlePagechange(currentPage+1)} disabled={endindex>=cardvalues.length} >next</button>
        </div>
    )
}

export default Cards