import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CompletionRing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OverlayTrigger, Tooltip, Form } from 'react-bootstrap';

interface CompletionRingProps {
  progress: number;
  carbonGoal: number;
  onInfoClick: () => void;
  tooltipContent: string;
}

const CompletionRing: React.FC<CompletionRingProps> = ({ progress, carbonGoal, onInfoClick, tooltipContent }) => {
  const circumference = 2 * Math.PI * 45;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const progressOffset = circumference - (progress / 100) * circumference;
    setOffset(progressOffset);
  }, [progress, circumference]);
  
  const [plugOff, setPlugOff] = useState(false);
  const handleToggleChange = () => {
    setPlugOff(!plugOff);
  };

  return (
    <div className='completion-ring-container'>
        <h1 className='app-title'>Hive Halo</h1>
        <div className="completion-ring">
            <svg className="completion-ring-svg" viewBox="0 0 100 100">
                <circle className="completion-ring-background" cx="50" cy="50" r="45" />
                <circle className="completion-ring-progress" cx="50" cy="50" r="45" style={{ strokeDashoffset: offset, strokeDasharray: circumference }} />
            </svg>
            <OverlayTrigger
          placement="top"
          overlay={<Tooltip id="tooltip">{tooltipContent}</Tooltip>}
        >
          <div className="completion-ring-label">
            <span>{`${progress * (carbonGoal / 100)} kg`}</span>
            <svg className="info-icon" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-.5-6h1v-5h-1zm0-6h2v2h-2z" />
            </svg>
            <h3 className='carbon-label'>CO2</h3>
            {progress >= 80 && (
              <Form.Check
                type="switch"
                id="toggleSwitch"
                label="Turn off TV plug?"
                checked={plugOff}
                onChange={handleToggleChange}
                className='plug-form'
              />
            )}
          </div>
          </OverlayTrigger>
        </div>
    </div>
  );
};

CompletionRing.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default CompletionRing;
