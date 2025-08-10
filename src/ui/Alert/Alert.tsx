import { createPortal } from 'react-dom';

export interface AlertPortalProps {
  type: 'success' | 'error' | 'info';
  message: string;
}

export const AlertPortal = ({ type, message }: AlertPortalProps) => {
  return createPortal(
    <div
      style={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        translate: '-50% 0',
        width: 300,
        padding: '12px 16px',
        backgroundColor:
          {
            success: '#4caf50',
            error: '#f44336',
            info: '#2196f3',
            warning: '#ff9800',
          }[type] || '#2196f3',
        color: 'white',
        borderRadius: 4,
        boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
      role="alert"
      aria-live="assertive"
    >
      <div style={{ marginBottom: 8, textAlign: 'center' }}>{message}</div>
    </div>,
    document.body,
  );
};
