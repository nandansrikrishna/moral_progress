import { useState } from 'react';

type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface Piece {
    id: string;
    title: string;
    color: string;
    position: Position;
    x: number;
    y: number;
    details: string;
}

const PuzzlePiece = ({ 
    title, 
    color, 
    x, 
    y, 
    onClick, 
    position 
}: {
    title: string;
    color: string;
    x: number;
    y: number;
    onClick: () => void;
    position: Position;
}) => {
    // Same puzzle piece shapes but simplified content
    const paths = {
        'top-left': `M ${x},${y} 
                 h 80 a 20,20 0 0 1 40,0 h 80
                 v 80 a 20,20 0 0 1 0,40 v 80
                 h -200 
                 v -200 z`,
        'top-right': `M ${x},${y} 
                  h 200
                  v 80 a 20,20 0 0 0 0,40 v 80
                  h -80 a 20,20 0 0 1 -40,0 h -80
                  v -200 z`,
        'bottom-left': `M ${x},${y}
                    h 80 a 20,20 0 0 1 40,0 h 80
                    v 200 h -200
                    v -200 z`,
        'bottom-right': `M ${x},${y}
                     h 200 v 200 h -200
                     v -80 a 20,20 0 0 1 0,-40 v -80 z`
    };

    return (
        <g onClick={onClick} style={{ cursor: 'pointer' }} className="hover:opacity-90 transition-opacity">
            <path
                d={paths[position]}
                fill={color}
                stroke="white"
                strokeWidth="2"
            />
            <text x={x + 100} y={y + 100} textAnchor="middle" fill="white" className="font-bold">
                {title}
            </text>
        </g>
    );
};

const PuzzleView = () => {
    const [selectedPiece, setSelectedPiece] = useState<Piece | null>(null);

    const pieces: Piece[] = [
        {
            id: 'kelly-westra',
            title: 'Kelly & Westra',
            color: '#3B82F6',
            position: 'top-left',
            x: 100,
            y: 100,
            details: `Kelly & Westra examine "affective friction" - the emotional discomfort that occurs when encountering changing norms. This friction manifests as resistance, irritation, and defensiveness when faced with moral change. While these uncomfortable feelings can sometimes facilitate progress by forcing us to confront our assumptions, they can also hinder change by making people dig in their heels. Their work emphasizes that moral change inherently involves emotional tension, whether that change is progressive or regressive. The discomfort itself doesn't tell us if a change is good or bad, but understanding it helps us grasp how moral change occurs.`
        },
        {
            id: 'kumar-campbell',
            title: 'Kumar & Campbell',
            color: '#10B981',
            position: 'top-right',
            x: 300,
            y: 100,
            details: `Kumar & Campbell explore moral progress through both social and psychological lenses. They argue that reliable social processes can lead to improvements in moral beliefs and that societies must develop ways to institutionalize these improvements to make them lasting. A key insight is that moral progress happens both externally (in society) and internally (in moral minds). For example, when moral emotions like respect expand to include previously excluded groups, this internal change drives external progress - as seen in how growing respect for women's equality led to reduced subordination in practice. They emphasize that progress requires both individual moral development and societal change.`
        },
        {
            id: 'cherry',
            title: 'Cherry',
            color: '#8B5CF6',
            position: 'bottom-left',
            x: 100,
            y: 300,
            details: 'Cherry highlights how marginalized groups and moral exemplars drive moral transformation through their lived experiences and resistance. She shows how those most affected by moral exclusion often become the catalysts for change, not just through formal activism but through their daily resistance to oppression. Her work demonstrates how moral progress often emerges from the bottom up, with marginalized communities pioneering new moral understandings that eventually reshape broader society. This perspective highlights how moral change frequently starts with those who most clearly see the flaws in existing moral frameworks.'
        },
        {
            id: 'may',
            title: 'May',
            color: '#EF4444',
            position: 'bottom-right',
            x: 300,
            y: 300,
            details: 'May examines how psychological mechanisms both enable and obstruct moral progress, bridging emotional and rational approaches. Rather than seeing emotion and reason as opposed forces, he shows how they work together (or sometimes against each other) in moral development. His work identifies specific psychological obstacles to moral progress - like how affective friction can create resistance - while also showing how emotional and rational capacities can combine to overcome these obstacles. This helps explain why moral progress often requires engaging both heart and mind.'
        }
    ];

    return (
        <div className="absolute inset-0">
            {!selectedPiece ? (
                <div className="w-full h-full flex justify-center items-center">
                    <svg width="600" height="600" viewBox="0 0 600 600">
                        {pieces.map((piece) => (
                            <PuzzlePiece
                                key={piece.id}
                                {...piece}
                                onClick={() => setSelectedPiece(piece)}
                            />
                        ))}
                    </svg>
                </div>
            ) : (
                <div className="w-full h-full p-6 flex flex-col">
                    <button
                        onClick={() => setSelectedPiece(null)}
                        className="self-start mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Back to Puzzle
                    </button>
                    <div className="bg-white rounded-lg p-6 flex-1 overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4">{selectedPiece.title}</h2>
                        <p>{selectedPiece.details}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PuzzleView;