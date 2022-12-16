import React from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import { routes } from '../../routes';
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
        onEntering={() => setTimeout(() => setShowNav(true), 701)}
      >
        {() => (
          <div className="page" ref={nodeRef}>
            {currentOutlet}
          </div>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
};

export default Root;
