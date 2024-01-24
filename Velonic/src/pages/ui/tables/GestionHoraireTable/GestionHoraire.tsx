import { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Column } from 'react-table';
import { PageSize, Table } from '@/components';
import { GestHorData } from './Data';
import { GestHor } from './types';

const columns: ReadonlyArray<Column> = [
  {
    Header: 'GestionHoraire_Id',
    accessor: 'GdhId',
    defaultCanSort: true,
  },
  {
    Header: 'Ressource_Id',
    accessor: 'RssId',
    defaultCanSort: true,
  },
  {
    Header: 'HeurDeTravaill',
    accessor: 'Heurdt',
    defaultCanSort: false,
  },
 
];

const sizePerPageList: PageSize[] = [
  {
    text: '5',
    value: 5,
  },
  {
    text: '10',
    value: 10,
  },
  {
    text: '25',
    value: 25,
  },
  {
    text: 'All',
    value: 0,
  },
];

const GestionHorTables = () => {
  const [data, setData] = useState<GestHor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await GestHorData();
        setData(apiData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h4 className="header-title">Gestion Horaires</h4>
              <p className="text-muted mb-0">A Table allowing search</p>
            </Card.Header>
            <Card.Body>
              <Table<GestHor>
                columns={columns}
                data={data}
                pageSize={5}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSearchable={true}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default GestionHorTables;
