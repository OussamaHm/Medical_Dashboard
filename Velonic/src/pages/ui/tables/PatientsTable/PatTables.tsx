import { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Column } from 'react-table';
import { PageSize, Table } from '@/components';
import { PatData } from './Dataa';
import { User } from './typees';

const columns: ReadonlyArray<Column> = [
  {
    Header: 'Patient_Id',
    accessor: 'PatId',
    defaultCanSort: true,
  },
  {
    Header: 'Patient_Nom',
    accessor: 'Nom',
    defaultCanSort: true,
  },
  {
    Header: 'Patient_History',
    accessor: 'History',
    defaultCanSort: false,
  },
  {
    Header: 'Patient_Adress',
    accessor: 'Adress',
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

const PatTables = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await PatData();
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
              <h4 className="header-title">Patients Table</h4>
              <p className="text-muted mb-0">A Table allowing search</p>
            </Card.Header>
            <Card.Body>
              <Table<User>
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

export default PatTables;
