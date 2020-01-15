import React from 'react';

import Navigation from '../partials/Navigation';

import {Row, Col, Container, Button, Form} from 'react-bootstrap';

import {get_chain_info} from '../../../utils/safexd_calls';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            all_info: null
        };
    }


    async componentDidMount() {

    };


    get_info = async (e) => {
        e.preventDefault();

        try {
            let h_obj = {};
            h_obj.daemon_host = e.target.daemon_host.value;
            h_obj.daemon_port = e.target.daemon_port.value;
            console.log(h_obj);
            let chain_info = await get_chain_info(h_obj);

            //if full last block is less than height
            //start updating

            this.setState({
                height: chain_info.height,
                all_info: chain_info
            });

        } catch (e) {
            console.error(e);
            console.error("error at retrieving the block height from the safexdaemon");
            alert("an error occurred with the request")
        }
    };




    render() {

        return (
            <div style={{position: 'relative'}}>
                <Container>
                    <Row>
                        <Navigation/>
                    </Row>
                    <Row>
                        <Col>
                            <Col>
                                <Form onSubmit={this.get_info}>
                                    <Form.Control name="daemon_host"
                                                  placedholder="daemon host ip address"/>
                                    <Form.Control name="daemon_port"
                                                  placedholder="daemon port"/>
                                    <Button type="submit">get the info</Button>
                                </Form>
                            </Col>
                        </Col>
                        <Col>
                            <ul>
                                <li>Blockchain Top Block: {this.state.height}</li>
                            </ul>
                        </Col>

                    </Row>

                </Container>

            </div>
        );
    }


}
