import { useState, useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Column } from 'react-table';
import { PageSize, Table } from '@/components';
import { DossMedData } from './Data';
import { DossMed } from './types';

const columns: ReadonlyArray<Column> = [
  {
    Header: 'DossierMedical_Id',
    accessor: 'DmId',
    defaultCanSort: true,
  },
  {
    Header: 'RendezV_Id',
    accessor: 'RdvId',
    defaultCanSort: true,
  },
  {
    Header: 'Prescription',
    accessor: 'Prescription',
    defaultCanSort: false,
  },
  {
    Header: 'Resultat: ',
    accessor: 'Resultat',
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

export const DossTables = () => {
  const [data, setData] = useState<DossMed[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData = await DossMedData();
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
              <h4 className="header-title">Dossier Table</h4>
              <p className="text-muted mb-0">A Table allowing search</p>
            </Card.Header>
            <Card.Body>
              <Table<DossMed>
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

export default DossTables;
