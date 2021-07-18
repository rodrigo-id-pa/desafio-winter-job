import React from 'react';
import ChartistGraph from 'react-chartist';

import {
  Button,
  Card,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg='3' sm='6'>
            <Card className='card-stats'>
              <Card.Body>
                <Row>
                  <Col xs='5'>
                    <div className='icon-big text-center icon-warning'>
                      <i className='nc-icon nc-chart text-warning'></i>
                    </div>
                  </Col>
                  <Col xs='7'>
                    <div className='numbers'>
                      <p className='card-category'>Números</p>
                      <Card.Title as='h4'>15GB</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className='stats'>
                  <i className='fas fa-redo mr-1'></i>
                  Atualizações
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg='3' sm='6'>
            <Card className='card-stats'>
              <Card.Body>
                <Row>
                  <Col xs='5'>
                    <div className='icon-big text-center icon-warning'>
                      <i className='nc-icon nc-light-3 text-success'></i>
                    </div>
                  </Col>
                  <Col xs='7'>
                    <div className='numbers'>
                      <p className='card-category'>Receita</p>
                      <Card.Title as='h4'>R$ 5.000</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className='stats'>
                  <i className='far fa-calendar-alt mr-1'></i>
                  Último dia
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg='3' sm='6'>
            <Card className='card-stats'>
              <Card.Body>
                <Row>
                  <Col xs='5'>
                    <div className='icon-big text-center icon-warning'>
                      <i className='nc-icon nc-vector text-danger'></i>
                    </div>
                  </Col>
                  <Col xs='7'>
                    <div className='numbers'>
                      <p className='card-category'>Erros</p>
                      <Card.Title as='h4'>23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className='stats'>
                  <i className='far fa-clock-o mr-1'></i>
                  Na última hora
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg='3' sm='6'>
            <Card className='card-stats'>
              <Card.Body>
                <Row>
                  <Col xs='5'>
                    <div className='icon-big text-center icon-warning'>
                      <i className='nc-icon nc-favourite-28 text-primary'></i>
                    </div>
                  </Col>
                  <Col xs='7'>
                    <div className='numbers'>
                      <p className='card-category'>Seguidores</p>
                      <Card.Title as='h4'>+45K</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className='stats'>
                  <i className='fas fa-redo mr-1'></i>
                  Atualizar agora
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md='8'>
            <Card>
              <Card.Header>
                <Card.Title as='h4'>Comportamento do usuário</Card.Title>
                <p className='card-category'>Desempenho 24 horas</p>
              </Card.Header>
              <Card.Body>
                <div className='ct-chart' id='chartHours'>
                  <ChartistGraph
                    data={{
                      labels: [
                        '9:00AM',
                        '12:00AM',
                        '3:00PM',
                        '6:00PM',
                        '9:00PM',
                        '12:00PM',
                        '3:00AM',
                        '6:00AM',
                      ],
                      series: [
                        [287, 385, 490, 492, 554, 586, 698, 695],
                        [67, 152, 143, 240, 287, 335, 435, 437],
                        [23, 113, 67, 108, 190, 239, 307, 308],
                      ],
                    }}
                    type='Line'
                    options={{
                      low: 0,
                      high: 800,
                      showArea: false,
                      height: '245px',
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        'screen and (max-width: 640px)',
                        {
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className='legend'>
                  <i className='fas fa-circle text-info'></i>
                  Abrir <i className='fas fa-circle text-danger'></i>
                  Clique <i className='fas fa-circle text-warning'></i>
                  Clique na segunda vez
                </div>
                <hr></hr>
                <div className='stats'>
                  <i className='fas fa-history'></i>
                  Atualizado 3 minutos atrás
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md='4'>
            <Card>
              <Card.Header>
                <Card.Title as='h4'>Estatísticas de e-mail</Card.Title>
                <p className='card-category'>Desempenho da última campanha</p>
              </Card.Header>
              <Card.Body>
                <div
                  className='ct-chart ct-perfect-fourth'
                  id='chartPreferences'
                >
                  <ChartistGraph
                    data={{
                      labels: ['40%', '20%', '40%'],
                      series: [40, 20, 40],
                    }}
                    type='Pie'
                  />
                </div>
                <div className='legend'>
                  <i className='fas fa-circle text-info'></i>
                  Abrir <i className='fas fa-circle text-danger'></i>
                  Quicar <i className='fas fa-circle text-warning'></i>
                  Cancelar inscrição
                </div>
                <hr></hr>
                <div className='stats'>
                  <i className='far fa-clock'></i>
                  Campanha enviada 2 dias atrás
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <Card>
              <Card.Header>
                <Card.Title as='h4'>Vendas de 2021</Card.Title>
                <p className='card-category'>
                  Todos os produtos incluindo impostos
                </p>
              </Card.Header>
              <Card.Body>
                <div className='ct-chart' id='chartActivity'>
                  <ChartistGraph
                    data={{
                      labels: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'Mai',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ],
                      series: [
                        [
                          542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756,
                          895,
                        ],
                        [
                          412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636,
                          695,
                        ],
                      ],
                    }}
                    type='Bar'
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: '245px',
                    }}
                    responsiveOptions={[
                      [
                        'screen and (max-width: 640px)',
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className='legend'>
                  <i className='fas fa-circle text-info'></i>
                  Tesla <i className='fas fa-circle text-danger'></i>
                  BMW
                </div>
                <hr></hr>
                <div className='stats'>
                  <i className='fas fa-check'></i>
                  Informação de dados certificados.
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md='6'>
            <Card className='card-tasks'>
              <Card.Header>
                <Card.Title as='h4'>Tarefas</Card.Title>
                <p className='card-category'>Desenvolvimento Full stack</p>
              </Card.Header>
              <Card.Body>
                <div className='table-full-width'>
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Check className='mb-1 pl-0'>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=''
                                type='checkbox'
                              ></Form.Check.Input>
                              <span className='form-check-sign'></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Assine o contrato para "Quais são os organizadores da
                          conferência tem mêdo?"
                        </td>
                        <td className='td-actions text-right'>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id='tooltip-488980961'>
                                Editar tarefa
                              </Tooltip>
                            }
                          >
                            <Button
                              className='btn-simple btn-link p-1'
                              type='button'
                              variant='info'
                            >
                              <i className='fas fa-edit'></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id='tooltip-506045838'>Remover</Tooltip>
                            }
                          >
                            <Button
                              className='btn-simple btn-link p-1'
                              type='button'
                              variant='danger'
                            >
                              <i className='fas fa-times'></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className='mb-1 pl-0'>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=''
                                type='checkbox'
                              ></Form.Check.Input>
                              <span className='form-check-sign'></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Linhas da grande literatura russa? Ou e-mails de Meu
                          chefe?
                        </td>
                        <td className='td-actions text-right'>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id='tooltip-537440761'>
                                Editar Tarefa
                              </Tooltip>
                            }
                          >
                            <Button
                              className='btn-simple btn-link p-1'
                              type='button'
                              variant='info'
                            >
                              <i className='fas fa-edit'></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id='tooltip-21130535'>Remover</Tooltip>
                            }
                          >
                            <Button
                              className='btn-simple btn-link p-1'
                              type='button'
                              variant='danger'
                            >
                              <i className='fas fa-times'></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className='mb-1 pl-0'>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=''
                                type='checkbox'
                              ></Form.Check.Input>
                              <span className='form-check-sign'></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Inundado: Um ano depois, avaliando o que foi perdido e
                          o que foi encontrado quando uma chuva devastadora
                          varreu metro Detroit.
                        </td>
                        <td className='td-actions text-right'>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id='tooltip-577232198'>
                                Editar tarefa
                              </Tooltip>
                            }
                          >
                            <Button
                              className='btn-simple btn-link p-1'
                              type='button'
                              variant='info'
                            >
                              <i className='fas fa-edit'></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id='tooltip-773861645'>Remover</Tooltip>
                            }
                          >
                            <Button
                              className='btn-simple btn-link p-1'
                              type='button'
                              variant='danger'
                            >
                              <i className='fas fa-times'></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className='mb-1 pl-0'>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                type='checkbox'
                              ></Form.Check.Input>
                              <span className='form-check-sign'></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Crie 4 experiências de usuário invisíveis que você
                          nunca conheceu.
                        </td>
                        <td className='td-actions text-right'>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id='tooltip-422471719'>
                                Editar tarefa
                              </Tooltip>
                            }
                          >
                            <Button
                              className='btn-simple btn-link p-1'
                              type='button'
                              variant='info'
                            >
                              <i className='fas fa-edit'></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id='tooltip-829164576'>Remover</Tooltip>
                            }
                          >
                            <Button
                              className='btn-simple btn-link p-1'
                              type='button'
                              variant='danger'
                            >
                              <i className='fas fa-times'></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className='mb-1 pl-0'>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=''
                                type='checkbox'
                              ></Form.Check.Input>
                              <span className='form-check-sign'></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Leia "Seguir torna o melhor"</td>
                        <td className='td-actions text-right'>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id='tooltip-160575228'>
                                Editar Tarefa
                              </Tooltip>
                            }
                          >
                            <Button
                              className='btn-simple btn-link p-1'
                              type='button'
                              variant='info'
                            >
                              <i className='fas fa-edit'></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id='tooltip-922981635'>Remover</Tooltip>
                            }
                          >
                            <Button
                              className='btn-simple btn-link p-1'
                              type='button'
                              variant='danger'
                            >
                              <i className='fas fa-times'></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check className='mb-1 pl-0'>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=''
                                disabled
                                type='checkbox'
                              ></Form.Check.Input>
                              <span className='form-check-sign'></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Deixar de seguir 5 inimigos do twitter</td>
                        <td className='td-actions text-right'>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id='tooltip-938342127'>
                                Editar Tarefa
                              </Tooltip>
                            }
                          >
                            <Button
                              className='btn-simple btn-link p-1'
                              type='button'
                              variant='info'
                            >
                              <i className='fas fa-edit'></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id='tooltip-119603706'>Remover</Tooltip>
                            }
                          >
                            <Button
                              className='btn-simple btn-link p-1'
                              type='button'
                              variant='danger'
                            >
                              <i className='fas fa-times'></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className='stats'>
                  <i className='now-ui-icons loader_refresh spin'></i>
                  Atualizado 3 minutos atrás
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
