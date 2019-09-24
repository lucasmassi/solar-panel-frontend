import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import {
  Container,
  Today,
  Content,
  Profile,
  ContentChart,
  ContentCard,
} from './styles';

import api from '../../services/api';

export default function Dashboard() {
  const [totalInstallation, setTotalInstallation] = useState(0);
  const [maxCost, setMaxCost] = useState(0);
  const [zipCode, setZipCode] = useState(0);
  const profile = useSelector(state => state.user.profile);
  const { state } = profile;

  useEffect(() => {
    async function loadTotalInstallation() {
      const response = await api.get(`panels/totalInstallation/${profile.id}`);

      setTotalInstallation(response.data);
    }

    async function loadMaxCost() {
      const response = await api.get(`panels/maxCost/${profile.id}`);

      setMaxCost(response.data.maxCost);
      setZipCode(response.data.zip_code);
    }

    loadMaxCost();
    loadTotalInstallation();
  }, []);

  const data = [
    {
      name: '5h', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: '6h', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: '7h', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: '8h', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: '9h', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: '10h', uv: 2390, pv: 3800, amt: 2500,
    },
  ];

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard"> Dia</Link>
          <Link to="/dashboard"> Semana</Link>
          <Link to="/dashboard"> Mês</Link>
          <Link to="/dashboard"> Ano</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <Link to="/profile">
                <img
                  src="https://api.adorable.io/avatars/55/abott@adorable.png"
                  alt=""
                />
              </Link>
            </div>
          </Profile>
        </aside>
      </Content>
      <Today>Sexta-feira, 20 de Dezembro</Today>
      <ContentChart>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </ContentChart>
      <ContentCard>
        <div>
          <h1>Instalações feitas</h1>
          <strong>Total (kw/h)</strong>
          <CountUp
            start={0}
            duration={1.75}
            delay={0}
            end={totalInstallation.toFixed(0)}
          >
            <span>{totalInstallation.toFixed(0)}</span>
          </CountUp>
          <strong>Estado</strong>
          <span>{state}</span>
        </div>
        <div>
          <h1>Maior custo</h1>
          <strong>CEP</strong>
          <span>{zipCode}</span>
          <strong>Custo (kw/h)</strong>
          <CountUp start={0} duration={1.75} delay={0} end={maxCost.toFixed(2)}>
            <span>{maxCost.toFixed(2)}</span>
          </CountUp>
        </div>
        <div>
          <h1>3 maiores meses</h1>
          <strong>Junho</strong>
          <span>5800kw/h</span>
          <strong>Julho</strong>
          <span>5700kw/h</span>
          <strong>Agosto</strong>
          <span>5700kw/h</span>
        </div>
      </ContentCard>
    </Container >
  );
}
