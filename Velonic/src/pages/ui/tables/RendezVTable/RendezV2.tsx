import { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Column } from 'react-table';
import { PageSize, Table } from '@/components';
import { RendezVData } from './Data2';
import { RendezV } from './types';

const columns: ReadonlyArray<Column> = [
  {
    Header: 'RendezV_Id',
    accessor: 'RdvId',
    defaultCanSort: true,
  },
  {
    Header: 'Patient_Id',
    accessor: 'PatId',
    defaultCanSort: true,
  },
  {
    Header: 'Docteur_Id',
    accessor: 'DocId',
    defaultCanSort: false,
  },
  {
    Header: 'Date Du RendezV',
    accessor: 'Daate',
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

export const RendezVTables = () => {
  const [data, setData] = useState<RendezV[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await RendezVData();
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
              <h4 className="header-title">RendezV Table</h4>
              <p className="text-muted mb-0">A Table allowing search</p>
            </Card.Header>
            <Card.Body>
              <Table<RendezV>
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

export default RendezVTables;
