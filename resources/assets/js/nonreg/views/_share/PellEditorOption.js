export default {
options: [{
      name: 'bold',
      icon: '<i class="fa fa-bold"></i>',
    },
    {
      name: 'italic',
      icon: '<i class="fa fa-italic"></i>',
    },
    {
      name: 'underline',
      icon: '<i class="fa fa-underline"></i>',
    },
    {
      name: 'strikethrough',
      icon: '<i class="fa fa-strikethrough"></i>',
    },
    {
      name: 'backColor',
      icon: '<div style="background-color:yellow;"><i class="fa fa-font"></i></div>',
      title: 'Highlight Color',
      result: () => window.pell.exec('backColor', 'yellow')
    },
    {
      name: 'foreColor',
      icon: '<div style="color:red;"><i class="fa fa-font"></i></div>',
      title: 'Red Font',
      result: () => window.pell.exec('foreColor', 'red')
    },
    {
      name: 'olist',
      icon: '<i class="fa fa-list-ol"></i>',
    },
    {
      name: 'ulist',
      icon: '<i class="fa fa-list-ul"></i>',
    },
    'heading1',
    'heading2',
    {
      name: 'Clear Formatting',
      title: 'Clear Formatting',
      icon: '<i class="fa fa-eraser"></i>',
      result: () => window.pell.exec('removeFormat')
    },
    // 'line',
    // {
    //   name: 'image',
    //   icon: '<i class="fa fa-image"></i>',
    //   result: () => {
    //     const url = window.prompt('Enter the image URL')
    //     if (url) window.pell.exec('insertImage', ensureHTTP(url))
    //   }
    // },
    // {
    //   name: 'link',
    //   icon: '<i class="fa fa-link"></i>',
    //   result: () => {
    //     const url = window.prompt('Enter the link URL')
    //     if (url) window.pell.exec('createLink', ensureHTTP(url))
    //   }
    // },
  ],
  classes: {
    actionbar: 'pell-actionbar',
    button: 'pell-button',
    content: 'pell-content form-control',
    selected: 'pell-button-selected'
  },
}