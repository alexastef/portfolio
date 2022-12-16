export const defaultStyle = { opacity: 0 };

/* ----- Slide down ----- */
export const slideDownTransitionStyles = translate => ({
  entering: { opacity: 0, transform: `translateY(-${translate}%)` },
  entered: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 0.7s, transform linear 0.4s'
  },
  exiting: { transform: 'translateY(0)' },
  exited: { transform: 'translateY(100%)', transition: 'transform linear 4s' }
});

export const slideDownDelayedStyles = delay => ({ entered: { ...slideDownTransitionStyles.entered, transitionDelay: delay } });

/* ----- Slide Up ----- */
export const slideUpTransitionStyles = translate => ({
  entering: { opacity: 0, transform: `translateY(${translate}%)` },
  entered: {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 0.7s, transform linear 0.4s'
  },
  exiting: { transform: 'translateY(0)' },
  exited: { transform: 'translateY(100%)', transition: 'transform linear 4s' }
});

export const slideUpDelayedStyles = delay => ({ entered: { ...slideDownTransitionStyles.entered, transitionDelay: delay } });

/* ----- Breathe In (scale) ----- */
export const breatheInTransitionStyles = {
  transform: 'scale(0)',
  entering: { transform: 'scale(0)' },
  entered: {
    opacity: 1,
    transform: 'scale(1)',
    transition: 'transform linear 0.5s'
  },
  exiting: { },
  exited: { }
};
