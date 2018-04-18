tinymce.init({
    selector: '#editor',
    height: '400',
    plugins: [
        "advlist link image lists charmap print preview media",
        "table contextmenu directionality emoticons template textcolor colorpicker code spellchecker"
    ],
    toolbar1: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent | link image",
    toolbar2: " fontsizeselect | print preview media | forecolor backcolor emoticons | template | addName",
    menubar: 'file edit insert view format table tools',
    setup: function (editor) {
        editor.addButton('addName', {
            text: 'Insert User Name',
            icon: false,
            onclick: function () {
                editor.windowManager.open({
                    title: 'Insert User Name',
                    body: [{ type: 'textbox', name: 'firstName', label: 'First Name' },
                    { type: 'textbox', name: 'lastName', label: 'Last Name' }],
                    width: 700,
                    height: 100,
                    onsubmit: function (e) {
                        editor.insertContent(e.data.firstName)
                        editor.insertContent(' ')
                        editor.insertContent(e.data.lastName)
                    },
                })
            }
        })
    }
})