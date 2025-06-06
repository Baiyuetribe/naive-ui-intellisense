import { ElDocument } from '@/document'
import { DocumentAttribute } from '@/document'
import { DocumentEvent } from '@/document'
import { DocumentSlot } from '@/document'

export const attributes: DocumentAttribute[] = [
  {
    name: 'append',
    type: 'boolean',
    default: false,
    value: '-',
    description: '选中后是否追加',
    version: ''
  },
  {
    name: 'blur-after-select',
    type: 'boolean',
    default: false,
    value: '-',
    description: '选中后是否 blur',
    version: ''
  },
  {
    name: 'clear-after-select',
    type: 'boolean',
    default: false,
    value: '-',
    description: '选中后是否清空',
    version: ''
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: false,
    value: '-',
    description: '自动填充是否支持可清除',
    version: ''
  },
  {
    name: 'default-value',
    type: 'string',
    default: null,
    value: '-',
    description: '自动填充的默认值',
    version: ''
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: false,
    value: '-',
    description: '自动填充是否禁用',
    version: ''
  },
  {
    name: 'get-show',
    type: '(value: string) => boolean',
    default: undefined,
    value: '-',
    description: '根据输入值在聚焦的状态中决定是否显示菜单',
    version: ''
  },
  {
    name: 'input-props',
    type: 'InputHTMLAttributes',
    default: undefined,
    value: '-',
    description: '自动填充中 input 元素的属性',
    version: ''
  },
  {
    name: 'loading',
    type: 'boolean',
    default: false,
    value: '-',
    description: '是否展示加载状态',
    version: ''
  },
  {
    name: 'menu-props',
    type: 'HTMLAttributes',
    default: undefined,
    value: '-',
    description: '菜单的 DOM 属性',
    version: ''
  },
  {
    name: 'options',
    type: 'Array<string | AutoCompleteOption | AutoCompleteGroupOption>',
    default: '[]',
    value: '-',
    description: '自动填充的自定义选项',
    version: ''
  },
  {
    name: 'placeholder',
    type: 'string',
    default: '请输入',
    value: '-',
    description: '自动填充的提示信息',
    version: ''
  },
  {
    name: 'placement',
    type: "'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end'",
    default: 'bottom-start',
    value: 'top-start/top/top-end/right-start/right/right-end/bottom-start/bottom/bottom-end/left-start/left/left-end',
    description: '自动填充的弹出位置',
    version: ''
  },
  {
    name: 'render-label',
    type: '(option: SelectOption | SelectGroupOption, selected: boolean) => VNodeChild',
    default: undefined,
    value: '-',
    description: '选项标签渲染函数',
    version: ''
  },
  {
    name: 'render-option',
    type: '(info: { node: VNode, option: SelectOption | SelectGroupOption, selected: boolean }) => VNodeChild',
    default: undefined,
    value: '-',
    description: '选项的渲染函数',
    version: ''
  },
  {
    name: 'show-empty',
    type: 'boolean',
    default: false,
    value: '-',
    description: '在没有选项的时候是否展示菜单',
    version: ''
  },
  {
    name: 'size',
    type: "'small' | 'medium' | 'large'",
    default: 'medium',
    value: 'small/medium/large',
    description: '自动填充的尺寸大小',
    version: ''
  },
  {
    name: 'status',
    type: "'success' | 'warning' | 'error'",
    default: undefined,
    value: 'success/warning/error',
    description: '验证状态',
    version: ''
  },
  {
    name: 'to',
    type: 'string | HTMLElement | false',
    default: 'body',
    value: '-',
    description: '菜单的容器节点，`false` 会待在原地',
    version: ''
  },
  {
    name: 'value',
    type: 'string',
    default: undefined,
    value: '-',
    description: '自动填充的数据用户可控',
    version: ''
  },
  {
    name: 'on-blur',
    type: '(event: FocusEvent) => void',
    default: undefined,
    value: '-',
    description: 'blur 时触发的回调函数',
    version: ''
  },
  {
    name: 'on-focus',
    type: '(event: FocusEvent) => void',
    default: undefined,
    value: '-',
    description: 'focus 时触发的回调函数',
    version: ''
  },
  {
    name: 'on-select',
    type: '(value: string) => void',
    default: undefined,
    value: '-',
    description: 'select 选中时触发的回调函数',
    version: ''
  },
  {
    name: 'on-update:value',
    type: '(value: string | null) => void',
    default: undefined,
    value: '-',
    description: '可控数据更新时触发的回调函数',
    version: ''
  }
]

export const events: DocumentEvent[] = []

export const slots: DocumentSlot[] = [
  {
    name: 'default',
    description: '自定义输入元素，由用户填充',
    params: '(options: { handleInput: (value: string) => void, handleFocus: function, handleBlur: function, value: string, theme: string | null })',
    version: ''
  },
  {
    name: 'empty',
    description: '菜单为空时候的内容',
    params: '()',
    version: '2.37.1'
  },
  {
    name: 'prefix',
    description: '输入框头部内容',
    params: '()',
    version: ''
  },
  {
    name: 'suffix',
    description: '输入框尾部内容',
    params: '()',
    version: ''
  }
]

export const document: ElDocument = { attributes, events, slots }

export default document
