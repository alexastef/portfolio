import React from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { routes } from '../../App';
import useStore from '../../stores';

const Root = () => {
  const location = useLocation();
  const { nodeRef } = routes?.find(route => route.path === location.pathname) ?? {};
  const currentOutlet = useOutlet();
  const { setShowNav } = useStore();

  return (
    <SwitchTransition mode="in-out">
      <CSSTransition
        unmountOnExit
        classNames="page"
        key={location.pathname}
        nodeRef={nodeRef}
        timeout={701}
        onEnter={() => {
          setShowNav(false);
        }}
        onEntering={async () => {
          await new Promise(res => setTimeout(res, 600));
          setShowNav(true);
        }}
      >
        {state => (
          <div className="page" ref={nodeRef}>
            {currentOutlet}
          </div>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Root;
