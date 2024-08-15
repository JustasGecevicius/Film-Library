import { cloneElement, useEffect, useRef, useState } from 'react';

export const IntersectionObserverWrapper = (props) => {
  const targetElement = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, {});
    observer.observe(targetElement.current);

    return () => observer.unobserve(targetElement.current);
  }, []);

  function onIntersection() {
    setIsInView(true);
  }

  return (
    <div ref={targetElement}>
      {isInView ? cloneElement(props.children, props) : null}
    </div>
  );
};
