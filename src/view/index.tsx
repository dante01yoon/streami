import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from 'lib/useStore';

import { GnbContainer } from 'components/gnb';
import { Table } from 'components/table';
export const MainView:FC = observer(() => {
  const edit = useStore('edit');
  useEffect(()=> {
    edit.requestData();
  },[]);
  const { statData } = edit;
  return(
    <>
      <GnbContainer>
        <Table statData={statData}/>
      </GnbContainer>
    </>
  )
});

