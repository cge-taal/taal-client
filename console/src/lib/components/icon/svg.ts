const icons = {
  check:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L9.70711 17.7071C9.31658 18.0976 8.68342 18.0976 8.29289 17.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z" fill="currentColor"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 5L19 19M5 19L19 5L5 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="currentColor"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 5C12.5523 5 13 5.44772 13 6V11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H11V6C11 5.44772 11.4477 5 12 5Z" fill="currentColor"/></svg>',
  'chevron-left':
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="currentColor"/></svg>',
  'chevron-right':
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="currentColor"/></svg>',
  'chevron-down':
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="currentColor"/></svg>',
  'chevron-up':
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 7.29289C11.6834 6.90237 12.3166 6.90237 12.7071 7.29289L19.7071 14.2929C20.0976 14.6834 20.0976 15.3166 19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071L12 9.41421L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L11.2929 7.29289Z" fill="currentColor"/></svg>',
  'document-duplicate':
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V15C9 15.2652 9.10536 15.5196 9.29289 15.7071C9.48043 15.8946 9.73478 16 10 16H18C18.2652 16 18.5196 15.8946 18.7071 15.7071C18.8946 15.5196 19 15.2652 19 15V8.41421L14.5859 4.00011L10 4ZM7.87868 2.87868C8.44129 2.31607 9.20435 2 10 2H14.586C15.1163 2.00011 15.6251 2.21086 16.0001 2.58589M16.0001 2.58589L20.414 6.99979C20.414 6.99982 20.414 6.99975 20.414 6.99979C20.789 7.37476 20.9999 7.88345 21 8.41379V15C21 15.7957 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7957 18 18 18H17V19C17 19.7957 16.6839 20.5587 16.1213 21.1213C15.5587 21.6839 14.7957 22 14 22H6C5.20435 22 4.44129 21.6839 3.87868 21.1213C3.31607 20.5587 3 19.7957 3 19V9C3 8.20435 3.31607 7.44129 3.87868 6.87868C4.44129 6.31607 5.20435 6 6 6H7V5C7 4.20435 7.31607 3.44129 7.87868 2.87868M7 8H6C5.73478 8 5.48043 8.10536 5.29289 8.29289C5.10536 8.48043 5 8.73478 5 9V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H14C14.2652 20 14.5196 19.8946 14.7071 19.7071C14.8946 19.5196 15 19.2652 15 19V18H10C9.20435 18 8.44129 17.6839 7.87868 17.1213C7.31607 16.5587 7 15.7957 7 15V8Z" fill="currentColor"/></svg>',
  'view-list':
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6ZM3 10C3 9.44772 3.44772 9 4 9H20C20.5523 9 21 9.44772 21 10C21 10.5523 20.5523 11 20 11H4C3.44772 11 3 10.5523 3 10ZM3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="currentColor"/></svg>',
  'view-grid':
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V8C5 8.26522 5.10536 8.51957 5.29289 8.70711C5.48043 8.89464 5.73478 9 6 9H8C8.26522 9 8.51957 8.89464 8.70711 8.70711C8.89464 8.51957 9 8.26522 9 8V6C9 5.73478 8.89464 5.48043 8.70711 5.29289C8.51957 5.10536 8.26522 5 8 5H6ZM3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V8C11 8.79565 10.6839 9.55871 10.1213 10.1213C9.55871 10.6839 8.79565 11 8 11H6C5.20435 11 4.44129 10.6839 3.87868 10.1213C3.31607 9.55871 3 8.79565 3 8V6C3 5.20435 3.31607 4.44129 3.87868 3.87868ZM16 5C15.7348 5 15.4804 5.10536 15.2929 5.29289C15.1054 5.48043 15 5.73478 15 6V8C15 8.26522 15.1054 8.51957 15.2929 8.70711C15.4804 8.89464 15.7348 9 16 9H18C18.2652 9 18.5196 8.89464 18.7071 8.70711C18.8946 8.51957 19 8.26522 19 8V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16ZM13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V8C21 8.79565 20.6839 9.55871 20.1213 10.1213C19.5587 10.6839 18.7957 11 18 11H16C15.2043 11 14.4413 10.6839 13.8787 10.1213C13.3161 9.55871 13 8.79565 13 8V6C13 5.20435 13.3161 4.44129 13.8787 3.87868ZM6 15C5.73478 15 5.48043 15.1054 5.29289 15.2929C5.10536 15.4804 5 15.7348 5 16V18C5 18.2652 5.10536 18.5196 5.29289 18.7071C5.48043 18.8946 5.73478 19 6 19H8C8.26522 19 8.51957 18.8946 8.70711 18.7071C8.89464 18.5196 9 18.2652 9 18V16C9 15.7348 8.89464 15.4804 8.70711 15.2929C8.51957 15.1054 8.26522 15 8 15H6ZM3.87868 13.8787C4.44129 13.3161 5.20435 13 6 13H8C8.79565 13 9.55871 13.3161 10.1213 13.8787C10.6839 14.4413 11 15.2043 11 16V18C11 18.7957 10.6839 19.5587 10.1213 20.1213C9.55871 20.6839 8.79565 21 8 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V16C3 15.2044 3.31607 14.4413 3.87868 13.8787ZM16 15C15.7348 15 15.4804 15.1054 15.2929 15.2929C15.1054 15.4804 15 15.7348 15 16V18C15 18.2652 15.1054 18.5196 15.2929 18.7071C15.4804 18.8946 15.7348 19 16 19H18C18.2652 19 18.5196 18.8946 18.7071 18.7071C18.8946 18.5196 19 18.2652 19 18V16C19 15.7348 18.8946 15.4804 18.7071 15.2929C18.5196 15.1054 18.2652 15 18 15H16ZM13.8787 13.8787C14.4413 13.3161 15.2043 13 16 13H18C18.7957 13 19.5587 13.3161 20.1213 13.8787C20.6839 14.4413 21 15.2043 21 16V18C21 18.7957 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7957 21 18 21H16C15.2043 21 14.4413 20.6839 13.8787 20.1213C13.3161 19.5587 13 18.7957 13 18V16C13 15.2043 13.3161 14.4413 13.8787 13.8787Z" fill="currentColor"/></svg>',
  filters:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_165_16585)"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 11.4477 6.44772 11 7 11L17 11C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13L7 13C6.44772 13 6 12.5523 6 12Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 17C10 16.4477 10.4477 16 11 16L13 16C13.5523 16 14 16.4477 14 17C14 17.5523 13.5523 18 13 18L11 18C10.4477 18 10 17.5523 10 17Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 6.44772 3.44772 6 4 6L20 6C20.5523 6 21 6.44772 21 7C21 7.55229 20.5523 8 20 8L4 8C3.44772 8 3 7.55228 3 7Z" fill="currentColor"/></g><defs><clipPath id="clip0_165_16585"><rect width="18" height="12" fill="currentColor" transform="translate(3 6)"/></clipPath></defs></svg>',
  download:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V13.5858L15.2929 11.2929C15.6834 10.9024 16.3166 10.9024 16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929C7.68342 10.9024 8.31658 10.9024 8.70711 11.2929L11 13.5858V4C11 3.44772 11.4477 3 12 3ZM4 15C4.55228 15 5 15.4477 5 16V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16V17C21 18.0609 20.5786 19.0783 19.8284 19.8284C19.0783 20.5786 18.0609 21 17 21H7C5.93913 21 4.92172 20.5786 4.17157 19.8284C3.42143 19.0783 3 18.0609 3 17V16C3 15.4477 3.44772 15 4 15Z" fill="currentColor"/></svg>',
  'drag-corner':
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.0429 4.14516C21.5306 3.69792 21.5821 2.92358 21.1581 2.41564C20.7341 1.90769 19.9951 1.85848 19.5075 2.30572L2.40229 17.9949C1.91469 18.4422 1.86312 19.2165 2.28712 19.7244C2.71112 20.2324 3.45012 20.2816 3.93772 19.8344L21.0429 4.14516ZM21.3425 14.6595C21.8301 14.2122 21.8816 13.4379 21.4576 12.93C21.0336 12.422 20.2946 12.3728 19.807 12.82L12.1373 19.8548C11.6497 20.3021 11.5981 21.0764 12.0221 21.5844C12.4461 22.0923 13.1851 22.1415 13.6727 21.6943L21.3425 14.6595Z" fill="currentColor"/></svg>',
  'feather_upload-cloud':
    '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 24V42" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/><path d="M40.78 36.78C42.7307 35.7165 44.2716 34.0338 45.1597 31.9973C46.0478 29.9607 46.2324 27.6865 45.6844 25.5334C45.1364 23.3803 43.887 21.471 42.1333 20.1069C40.3797 18.7428 38.2217 18.0015 36 18H33.48C32.8746 15.6585 31.7463 13.4847 30.1799 11.642C28.6134 9.7993 26.6497 8.3357 24.4362 7.36121C22.2227 6.38673 19.8171 5.92672 17.4002 6.01576C14.9833 6.10481 12.6181 6.7406 10.4823 7.87533C8.34655 9.01006 6.4958 10.6142 5.06923 12.5672C3.64265 14.5201 2.67736 16.7711 2.24594 19.1508C1.81452 21.5305 1.92819 23.9771 2.57841 26.3065C3.22862 28.636 4.39847 30.7877 5.99998 32.6" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/><path d="M31.9999 31L23.9999 23L15.9999 31" stroke="currentColor" stroke-width="2" stroke-linecap="square"/></svg>',
  'bi_file-earmark-image':
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.75391 10.5C10.0494 10.5 10.342 10.4418 10.6149 10.3287C10.8879 10.2157 11.136 10.0499 11.3449 9.84099C11.5538 9.63206 11.7196 9.38402 11.8326 9.11104C11.9457 8.83806 12.0039 8.54547 12.0039 8.25C12.0039 7.95453 11.9457 7.66194 11.8326 7.38896C11.7196 7.11598 11.5538 6.86794 11.3449 6.65901C11.136 6.45008 10.8879 6.28434 10.6149 6.17127C10.342 6.0582 10.0494 6 9.75391 6C9.15717 6 8.58487 6.23705 8.16292 6.65901C7.74096 7.08097 7.50391 7.65326 7.50391 8.25C7.50391 8.84674 7.74096 9.41903 8.16292 9.84099C8.58487 10.2629 9.15717 10.5 9.75391 10.5Z" fill="currentColor"/><path d="M21 21C21 21.7956 20.6839 22.5587 20.1213 23.1213C19.5587 23.6839 18.7956 24 18 24H6C5.20435 24 4.44129 23.6839 3.87868 23.1213C3.31607 22.5587 3 21.7956 3 21V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.316071 5.20435 0 6 0L14.25 0L21 6.75V21ZM6 1.5C5.60218 1.5 5.22064 1.65804 4.93934 1.93934C4.65804 2.22064 4.5 2.60218 4.5 3V18L7.836 14.664C7.95422 14.5461 8.10843 14.4709 8.27417 14.4506C8.43992 14.4302 8.60773 14.4657 8.751 14.5515L12 16.5L15.2355 11.97C15.2988 11.8815 15.3806 11.8078 15.4753 11.754C15.5699 11.7003 15.6751 11.6678 15.7836 11.6588C15.8921 11.6498 16.0012 11.6645 16.1034 11.702C16.2056 11.7394 16.2985 11.7986 16.3755 11.8755L19.5 15V6.75H16.5C15.9033 6.75 15.331 6.51295 14.909 6.09099C14.4871 5.66903 14.25 5.09674 14.25 4.5V1.5H6Z" fill="currentColor"/></svg>',
  'arrow-narrow-right':
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.2929 7.29289C16.6834 6.90237 17.3166 6.90237 17.7071 7.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L17.7071 16.7071C17.3166 17.0976 16.6834 17.0976 16.2929 16.7071C15.9024 16.3166 15.9024 15.6834 16.2929 15.2929L18.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.5858L16.2929 8.70711C15.9024 8.31658 15.9024 7.68342 16.2929 7.29289Z" fill="currentColor"/></svg>',
  trash:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H19.9311L19.1305 19.213C19.1305 19.2131 19.1305 19.2129 19.1305 19.213C19.0765 19.9698 18.7379 20.6783 18.1826 21.1954C17.6274 21.7125 16.8968 22 16.138 22H7.86202C7.10323 22 6.37262 21.7125 5.81735 21.1954C5.26213 20.6783 4.92347 19.97 4.86954 19.2132C4.86953 19.2132 4.86955 19.2133 4.86954 19.2132L4.06886 8H4C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6H8V4C8 3.46957 8.21071 2.96086 8.58579 2.58579ZM10 6H14V4H10V6ZM6.07395 8L6.86446 19.0708C6.88242 19.3231 6.99533 19.5594 7.18042 19.7318C7.36551 19.9042 7.60905 20 7.862 20H16.138C16.391 20 16.6345 19.9042 16.8196 19.7318C17.0047 19.5594 17.1176 19.3233 17.1355 19.071L17.926 8H6.07395ZM10 10C10.5523 10 11 10.4477 11 11V17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17V11C9 10.4477 9.44772 10 10 10ZM14 10C14.5523 10 15 10.4477 15 11V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V11C13 10.4477 13.4477 10 14 10Z" fill="currentColor"/></svg>',
  key: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 5.99423C14.4477 5.99423 14 6.44195 14 6.99423C14 7.54651 14.4477 7.99423 15 7.99423C15.2652 7.99423 15.5195 8.09959 15.7071 8.28712C15.8946 8.47466 16 8.72901 16 8.99423C16 9.54651 16.4477 9.99423 17 9.99423C17.5523 9.99423 18 9.54651 18 8.99423C18 8.19858 17.6839 7.43552 17.1213 6.87291C16.5587 6.3103 15.7956 5.99423 15 5.99423Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14 6.99423C14 6.44195 14.4477 5.99423 15 5.99423C15.7956 5.99423 16.5587 6.3103 17.1213 6.87291C17.6839 7.43552 18 8.19858 18 8.99423C18 9.54651 17.5523 9.99423 17 9.99423C16.4477 9.99423 16 9.54651 16 8.99423C16 8.72901 15.8946 8.47466 15.7071 8.28712C15.5195 8.09959 15.2652 7.99423 15 7.99423C14.4477 7.99423 14 7.54651 14 6.99423Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 18.9184V17.9184H11.5C11.7652 17.9184 12.0196 17.813 12.2071 17.6255L14.0618 15.7708C14.9272 15.9525 15.8211 15.9689 16.6961 15.8172C17.7734 15.6303 18.7919 15.1938 19.6701 14.5424C20.5483 13.8911 21.2617 13.0431 21.7531 12.0664C22.2445 11.0897 22.5003 10.0108 22.5 8.91739C22.499 7.91184 22.2814 6.9183 21.862 6.00439C21.4426 5.09048 20.8312 4.27767 20.0694 3.62127C19.3077 2.96487 18.4134 2.48029 17.4476 2.20053C16.4817 1.92076 15.4669 1.85236 14.4723 2C13.4776 2.14764 12.5264 2.50784 11.6835 3.05608C10.8405 3.60433 10.1256 4.32775 9.58732 5.17711C9.04906 6.02647 8.70011 6.98183 8.56422 7.97817C8.45604 8.77128 8.4849 9.57553 8.64803 10.3561L3.08589 15.9183C2.71086 16.2932 2.50011 16.802 2.5 17.3324V19.9184C2.5 20.4488 2.71071 20.9575 3.08579 21.3326C3.46086 21.7076 3.96957 21.9184 4.5 21.9184H7.5C8.05228 21.9184 8.5 21.4706 8.5 20.9184V19.9184H9.5C10.0523 19.9184 10.5 19.4706 10.5 18.9184ZM14.7659 3.97833C14.0554 4.08378 13.376 4.34107 12.7739 4.73267C12.1718 5.12428 11.6611 5.64101 11.2767 6.24769C10.8922 6.85438 10.6429 7.53678 10.5459 8.24844C10.4488 8.96011 10.5062 9.68433 10.7142 10.3718C10.8209 10.7247 10.7248 11.1078 10.4641 11.3685L4.50011 17.3325L4.5 19.9184H6.5V18.9184C6.5 18.3661 6.94772 17.9184 7.5 17.9184H8.5V16.9184C8.5 16.3661 8.94772 15.9184 9.5 15.9184H11.0858L13.0499 13.9543C13.3109 13.6933 13.6944 13.5973 14.0475 13.7045C14.7948 13.9314 15.5848 13.98 16.3543 13.8466C17.1238 13.7131 17.8514 13.4013 18.4786 12.936C19.1059 12.4708 19.6155 11.8651 19.9665 11.1674C20.3175 10.4698 21 8 19.6688 6.24769C18.3376 4.49539 17 3.64673 14.7659 3.97833Z" fill="currentColor"/></svg>',
  hashtag:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2425 3.02985C11.7783 3.1638 12.1041 3.70673 11.9701 4.24253L11.0308 7.99999H14.9692L16.0299 3.75746C16.1638 3.22166 16.7067 2.8959 17.2425 3.02985C17.7783 3.1638 18.1041 3.70673 17.9701 4.24253L17.0308 7.99999H20C20.5523 7.99999 21 8.44771 21 8.99999C21 9.55228 20.5523 9.99999 20 9.99999H16.5308L15.5308 14H18C18.5523 14 19 14.4477 19 15C19 15.5523 18.5523 16 18 16H15.0308L13.9701 20.2425C13.8362 20.7783 13.2933 21.1041 12.7575 20.9701C12.2217 20.8362 11.8959 20.2933 12.0299 19.7575L12.9692 16H9.03078L7.97014 20.2425C7.83619 20.7783 7.29326 21.1041 6.75746 20.9701C6.22167 20.8362 5.89591 20.2933 6.02986 19.7575L6.96922 16H4C3.44772 16 3 15.5523 3 15C3 14.4477 3.44772 14 4 14H7.46922L8.46922 9.99999H6C5.44772 9.99999 5 9.55228 5 8.99999C5 8.44771 5.44772 7.99999 6 7.99999H8.96922L10.0299 3.75746C10.1638 3.22166 10.7067 2.8959 11.2425 3.02985ZM10.5308 9.99999L9.53078 14H13.4692L14.4692 9.99999H10.5308Z" fill="currentColor"/></svg>',
  exclamation:
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.40204 3.4998C10.557 1.50039 13.4429 1.50039 14.5979 3.4998L21.5259 15.4998C22.681 17.4995 21.2378 20 18.928 20H5.07196C2.76222 20 1.319 17.4997 2.47393 15.5C2.47397 15.4999 2.47389 15.5001 2.47393 15.5L9.40204 3.4998ZM11.1339 4.50019L4.20599 16.5C3.82113 17.1662 4.30177 18 5.07196 18H18.928C19.6981 18 20.1789 17.1664 19.794 16.5002L12.866 4.50019C12.481 3.8336 11.5189 3.8336 11.1339 4.50019ZM12 7.99999C12.5522 7.99999 13 8.44771 13 8.99999V11C13 11.5523 12.5522 12 12 12C11.4477 12 11 11.5523 11 11V8.99999C11 8.44771 11.4477 7.99999 12 7.99999ZM11 15C11 14.4477 11.4477 14 12 14H12.01C12.5622 14 13.01 14.4477 13.01 15C13.01 15.5523 12.5622 16 12.01 16H12C11.4477 16 11 15.5523 11 15Z" fill="currentColor"/></svg>',
  'check-circle':
    '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 13.0506 4.20693 14.0909 4.60896 15.0615C5.011 16.0321 5.60028 16.914 6.34315 17.6569C7.08601 18.3997 7.96793 18.989 8.93853 19.391C9.90914 19.7931 10.9494 20 12 20C13.0506 20 14.0909 19.7931 15.0615 19.391C16.0321 18.989 16.914 18.3997 17.6569 17.6569C18.3997 16.914 18.989 16.0321 19.391 15.0615C19.7931 14.0909 20 13.0506 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22C10.6868 22 9.38642 21.7413 8.17317 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z" fill="currentColor"/></svg>',
}

export default icons