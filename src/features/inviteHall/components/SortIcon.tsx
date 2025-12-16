import React from 'react';

type SortOrder = 'default' | 'asc' | 'desc';

interface SortIconProps {
  /**
   * 排序状态
   * default: 默认状态 (白色)
   * asc: 升序 (右侧向上箭头高亮)
   * desc: 降序 (左侧向下箭头高亮)
   */
  order?: SortOrder;
  /** 图标尺寸，默认 16 */
  size?: number;
  className?: string;
}

/**
 * 排序图标组件
 * 包含左侧向下箭头和右侧向上箭头
 * 能够根据传入的 order 属性改变颜色状态
 */
export const SortIcon: React.FC<SortIconProps> = ({ 
  order = 'default', 
  size = 16,
  className 
}) => {
  // 颜色定义
  const colors = {
    active: '#FADB14',   // 高亮色 (金色/黄色)，参考图片
    default: '#FFFFFF',  // 默认色 (白色)
    inactive: '#4B4B4B'  // 暗色 (深灰)，用于非激活状态
  };

  // 根据状态获取颜色
  // 左侧箭头 (向下)
  const getDownArrowColor = () => {
    if (order === 'default') return colors.default;
    if (order === 'desc') return colors.active;
    return colors.inactive;
  };

  // 右侧箭头 (向上)
  const getUpArrowColor = () => {
    if (order === 'default') return colors.default;
    if (order === 'asc') return colors.active;
    return colors.inactive;
  };

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ verticalAlign: 'middle' }}
    >
      {/* 左侧向下箭头 */}
      <path 
        d="M8 7V17M8 17L5 14M8 17L11 14" 
        stroke={getDownArrowColor()} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* 右侧向上箭头 */}
      <path 
        d="M16 17V7M16 7L13 10M16 7L19 10" 
        stroke={getUpArrowColor()} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SortIcon;
