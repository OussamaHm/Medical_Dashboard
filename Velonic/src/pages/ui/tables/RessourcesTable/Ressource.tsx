import { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Column } from 'react-table';
import { PageSize, Table } from '@/components';
import { RessourceData } from './Data';
import { Ressource } from './types';

const columns: ReadonlyArray<Column> = [
  {
    Header: 'Ressource_Id',
    accessor: 'RssId',
    defaultCanSort: true,
  },
  {
    Header: 'Occupation',
    accessor: 'Occupation',
    defaultCanSort: true,
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

const RessourceTables = () => {
  const [data, setData] = useState<Ressource[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await RessourceData();
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
              <h4 className="header-title">Ressource Table</h4>
              <p className="text-muted mb-0">A Table allowing search</p>
            </Card.Header>
            <Card.Body>
              <Table<Ressource>
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

export default RessourceTables;
