export const examples: ReadonlyArray<[any[], any[]]> = [
    [
        ['some string', 'some other string'],
        [5, {a: 4}]
    ],
    [
        [5, 10],
        ['5', {a: 4}]
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [-1, -2, -3, -4, -5, -6, -7, -8, -9, -10]
    ],
    [
        [true],
        [false]
    ],
    [
        [
            {a: 1, b: 2},
        ],
        [
            {a: 1},
            {b: 2},
            {a: 1, b: 2, c: 3}
        ]
    ],
    [
        [{serial: 4}, {name: 'some name'}],
        [{serial: 'some name'}, {name: 4}, {name: 'some name', serial: 4}]
    ]
]
