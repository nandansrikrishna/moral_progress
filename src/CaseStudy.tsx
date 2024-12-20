import { useState } from 'react';

const CaseStudyExplorer = () => {
    const [activeView, setActiveView] = useState('overview');

    const caseContent = {
        overview: {
            title: "The Community Garden",
            content: `In a diverse urban neighborhood, tensions arise over the management of a 
      long-standing community garden. Traditional plot-based ownership is challenged by 
      proposals for more collective resource sharing, bringing underlying social dynamics 
      and moral beliefs to the surface.`
        },
        characters: [
            {
                name: "Sarah Chen",
                role: "Long-time Resident",
                perspective: `A garden plot owner for 20 years, Sarah experiences strong affective 
        friction as new proposals challenge her traditional views of property and community.`
            },
            {
                name: "Marcus Rodriguez",
                role: "Community Organizer",
                perspective: `Recently moved to the neighborhood, Marcus advocates for collective 
        resource management based on his experiences with successful community projects.`
            },
            {
                name: "Diana Williams",
                role: "Garden Committee Chair",
                perspective: `Tasked with mediating between different community perspectives while 
        navigating institutional changes in garden policies.`
            }
        ],
        analysis: `The Community Garden case illustrates how moral progress requires both shifting norms 
    and demonstrable benefits. As the community grapples with changing from individual plot ownership 
    to collective resource management, we see how moral change creates emotional tension. The initial 
    discomfort and resistance from long-time garden members isn't just an obstacle - it's part of 
    how communities process and adapt to moral change. This affective friction forces engagement 
    with new ideas about resource sharing and community responsibility.

    To evaluate whether this change represents genuine moral progress, we can look beyond the 
    emotional responses to examine concrete benefits. The proposed changes would increase food 
    security for more community members, improve resource efficiency, and strengthen community 
    bonds through collective management. Like other examples of moral progress, such as expanding 
    marriage rights, these changes would extend benefits to a broader group while maintaining the 
    core community institution.

    The garden committee's efforts to develop new policies demonstrate how moral progress happens 
    through both informal social processes and formal institutional changes. As community members 
    share experiences with successful collective models and demonstrate their benefits, resistance 
    gradually shifts to acceptance. This shows how moral progress often emerges from practical 
    experience rather than abstract moral arguments, with demonstrable benefits helping overcome 
    initial emotional resistance to norm changes.`
    };

    return (
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Case Study Explorer</h2>

            <div className="flex space-x-4 mb-8">
                <button
                    onClick={() => setActiveView('overview')}
                    className={`px-4 py-2 rounded ${activeView === 'overview'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                >
                    Overview
                </button>
                <button
                    onClick={() => setActiveView('characters')}
                    className={`px-4 py-2 rounded ${activeView === 'characters'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                >
                    Characters
                </button>
                <button
                    onClick={() => setActiveView('analysis')}
                    className={`px-4 py-2 rounded ${activeView === 'analysis'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                >
                    Analysis
                </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
                {activeView === 'overview' && (
                    <div>
                        <h3 className="text-xl font-bold mb-4">{caseContent.overview.title}</h3>
                        <p className="text-gray-700">{caseContent.overview.content}</p>
                    </div>
                )}

                {activeView === 'characters' && (
                    <div className="grid md:grid-cols-3 gap-6">
                        {caseContent.characters.map((character) => (
                            <div key={character.name} className="bg-white p-4 rounded-lg shadow">
                                <h3 className="font-bold mb-2">{character.name}</h3>
                                <h4 className="text-sm text-gray-500 mb-2">{character.role}</h4>
                                <p className="text-gray-700">{character.perspective}</p>
                            </div>
                        ))}
                    </div>
                )}

                {activeView === 'analysis' && (
                    <div className="prose max-w-none">
                        <p className="text-gray-700 whitespace-pre-line">
                            {caseContent.analysis}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CaseStudyExplorer;