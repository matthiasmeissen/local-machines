const contentTag = document.querySelector('div.content')
const formTags = document.querySelectorAll('form')
const submitButton = document.querySelector('section button')

const questions = [
    {
        title: 'Text input',
        type: 'text',
        answer: ''
    },
    {
        title: 'Range',
        type: 'range',
        answer: ''
    },
    {
        title: 'Dropdown',
        type: 'dropdown',
        options: ['Option 1', 'Option 2', 'Option 3'],
        answer: ''
    },
    {
        title: 'Multiple',
        type: 'multiple',
        options: ['Option 1', 'Option 2', 'Option 3'],
        answer: ''
    },
    {
        title: 'Radio',
        type: 'radio',
        options: ['Radio 1', 'Radio 2', 'Radio 3'],
        answer: ''
    }
]

submitButton.addEventListener('click', function () {
    console.log(questions)
})

const makeInput = function (question) {
    let input

    if (question.type == 'text') {
        input = document.createElement('input')
        input.setAttribute('type', 'text')
    } else if (question.type == 'range') {
        input = document.createElement('input')
        input.setAttribute('type', 'range')
    } else if (question.type == 'dropdown') {
        input = document.createElement('select')
        question.options.forEach(option => {
            const item = document.createElement('option')
            item.setAttribute('vale', option)
            item.innerHTML = option

            input.appendChild(item)
        });
    } else if (question.type == 'multiple' || question.type == 'radio') {
        input = document.createElement('div')
        
        question.options.forEach(option => {
            const item = document.createElement('div')
            item.classList.add('select')

            const key = question.title + option

            const checkbox = document.createElement('input')

            if (question.type == 'multiple') {
                checkbox.setAttribute('type', 'checkbox')
                checkbox.setAttribute('name', key)
            } else if (question.type == 'radio') {
                checkbox.setAttribute('type', 'radio')
                checkbox.setAttribute('name', question.title)
            }

            checkbox.setAttribute('data-answer', option)
            checkbox.setAttribute('id', key)

            const label = document.createElement('label')
            label.setAttribute('for', key)
            label.innerHTML = option

            item.appendChild(checkbox)
            item.appendChild(label)

            input.appendChild(item)
        });
    }

    return input
}

questions.forEach((question, index) => {
    const section = document.createElement('section')

    const form = document.createElement('form')
    const label = document.createElement('label')
    label.innerHTML = question.title

    const button = document.createElement('button')
    button.setAttribute('type', 'submit')
    button.innerHTML = 'Ok'

    form.appendChild(label)
    form.appendChild(makeInput(questions[index]))
    form.appendChild(button)

    if (question.type == 'multiple' || question.type == 'radio') {
        form.addEventListener('submit', function (event) {
            event.preventDefault()

            const inputs = form.querySelectorAll('input')

            let selectedOptions = []

            inputs.forEach(item => {
                if (item.checked) {
                    selectedOptions.push(item.dataset.answer)
                }
            });

            questions[index].answer = selectedOptions

            console.log(questions[index])
        })
    } else {
        form.addEventListener('submit', function (event) {
            event.preventDefault()
            const answer = this.elements[0].value
            questions[index].answer = answer
    
            console.log(questions[index])
        })
    }

    section.appendChild(form)

    contentTag.appendChild(section)
});
