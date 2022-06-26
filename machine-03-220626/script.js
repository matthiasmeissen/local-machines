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
        title: 'Title 2',
        type: 'range',
        answer: ''
    },
    {
        title: 'Title 3',
        type: 'select',
        options: ['Option 1', 'Option 2', 'Option 3'],
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
    } else if (question.type == 'select') {
        input = document.createElement('select')
        question.options.forEach(option => {
            const item = document.createElement('option')
            item.setAttribute('vale', option)
            item.innerHTML = option

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

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        const answer = this.elements[0].value
        questions[index].answer = answer

        console.log(questions[index])
    })

    section.appendChild(form)

    contentTag.appendChild(section)
});
