import React from 'react';

/**
 * 邀请大厅卡片骨架屏
 * 对应深色模式下的邀约卡片样式
 */
export const InviteHallSkeleton: React.FC = () => {
  // 基础骨架块样式
  const skeletonBlockStyle: React.CSSProperties = {
    backgroundColor: '#333333',
    borderRadius: '4px',
    animation: 'skeleton-pulse 1.5s ease-in-out infinite',
  };

  return (
    <div style={{
      backgroundColor: '#080808', // 接近全黑的背景
      borderRadius: '12px',
      padding: '16px',
      width: '100%',
      boxSizing: 'border-box',
      border: '1px solid #1f1f1f',
      position: 'relative',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    }}>
      {/* 头部区域：头像、用户信息、操作按钮 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          {/* 头像 */}
          <div style={{
            ...skeletonBlockStyle,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '12px',
            flexShrink: 0,
          }} />
          
          {/* 用户名和辅助信息 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
            <div style={{ ...skeletonBlockStyle, width: '40%', height: '16px' }} />
            <div style={{ ...skeletonBlockStyle, width: '60%', height: '14px' }} />
          </div>
        </div>

        {/* 右上角按钮占位 (抢单) */}
        <div style={{
          ...skeletonBlockStyle,
          width: '70px',
          height: '32px',
          borderRadius: '16px',
          marginLeft: '12px',
          flexShrink: 0,
        }} />
      </div>

      {/* 中间信息区域：时间 */}
      <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
        <div style={{ ...skeletonBlockStyle, width: '30px', height: '16px', marginRight: '8px' }} /> {/* Label占位 */}
        <div style={{ ...skeletonBlockStyle, width: '70%', height: '16px' }} /> {/* 内容占位 */}
      </div>

      {/* 中间信息区域：偏好 */}
      <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
        <div style={{ ...skeletonBlockStyle, width: '30px', height: '16px', marginRight: '8px' }} /> {/* Label占位 */}
        <div style={{ ...skeletonBlockStyle, width: '20%', height: '16px' }} /> {/* 内容占位 */}
      </div>

      {/* 底部区域：预算 */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
        <div style={{ ...skeletonBlockStyle, width: '90px', height: '20px' }} />
      </div>

      {/* 简单的 Pulse 动画样式 */}
      <style>{`
        @keyframes skeleton-pulse {
          0% { opacity: 0.4; background-color: #333333; }
          50% { opacity: 1; background-color: #444444; }
          100% { opacity: 0.4; background-color: #333333; }
        }
      `}</style>
    </div>
  );
};

export default InviteHallSkeleton;
