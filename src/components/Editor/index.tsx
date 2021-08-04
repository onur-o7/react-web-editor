import React, { useEffect, useState } from "react";
import styled from "styled-components";

import CoordinatesTag from "../CoordinatesTag";
import { ComponentStyle, EditorProps } from "../../types/ui";
import { DIRECTIIONS } from "../../constants/location";
import GuideLine from "../GuideLine";
import useDraggable from "../../hooks/useDraggable";
import useResize from "../../hooks/useResize";

const Editor: React.FC<EditorProps> = ({ 
  width,
  height,
  top,
  left,
  minWidth,
  minHeight,
  parentStyle,
  children,
}): React.ReactElement => {
  const [componentStyle, setComponentStyle] = useState<EditorProps>({
    width,
    height,
    top,
    left,
    minWidth,
    minHeight,
  });
  const [isClicked, setIsClicked] = useState(false);

  const {
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
    isResizing,
  } = useResize({ componentStyle, onResize: setComponentStyle });

  const {
    handleDragStart,
    handleDragEnd,
    handleDragMove,
    isDragging,
  } = useDraggable({ 
    left: componentStyle.left, 
    top: componentStyle.top, 
    onDrag: setComponentStyle,
    dragBoardOption: parentStyle,
  });

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    document.addEventListener("mousemove", handleDragMove);

    return () => document.removeEventListener("mousemove", handleDragMove);
  }, [handleDragMove, isDragging]);

  useEffect(() => {
    if (!isResizing) {
      return;
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, isResizing, handleMouseUp]);

  const handleComponentClick = (): void => {
    setIsClicked((prev) => !prev);
  };

  return (
    <Wrapper
      width={componentStyle.width}
      height={componentStyle.height}
      top={componentStyle.top}
      left={componentStyle.left}
      onMouseUp={handleMouseUp}
      onClick={handleComponentClick}
    >
      {isClicked && 
        <>
          <CoordinatesTag top={componentStyle.top} left={componentStyle.left} />
          <DraggableHandler
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
          />
          <ResizeHandlersWrapper>
            {DIRECTIIONS.map((item) => (
              <div key={item} className={item} onMouseDown={handleMouseDown} />
            ))}
          </ResizeHandlersWrapper>
          <GuideLine 
            width={componentStyle.width}
            height={componentStyle.height}
            top={componentStyle.top}
            left={componentStyle.left}
          />
        </>
      }
      {children}
    </Wrapper>
  );
};

const DraggableHandler = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  position: absolute;
  cursor: move;
`;

const Wrapper = styled.div.attrs<ComponentStyle>(
  ({ width, height, left, top }) => ({
    style: {
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`,
    },
  })
)<ComponentStyle>`
  position: absolute;
  background-color: skyblue;
`;

const ResizeHandlersWrapper = styled.div`
  .top-left {
    top: -3px;
    left: -3px;
    cursor: nw-resize;
  }

  .top-right {
    top: -3px;
    right: -3px;
    cursor: ne-resize;
  }

  .bottom-left {
    bottom: -3px;
    left: -3px;
    cursor: sw-resize;
  }

  .bottom-right {
    bottom: -3px;
    right: -3px;
    cursor: se-resize;
  }

  > * {
    width: 7px;
    height: 7px;
    background-color: red;
    position: absolute;
    z-index: 1;
  }
`;

export default Editor;
