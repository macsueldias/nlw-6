import { ReactNode } from 'react';
import './style.scss';

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isAnwered?: boolean;
    isHighlighted?: boolean;
}

export function Question({
    content,
    author,
    isAnwered = false,
    isHighlighted = false,
    children,
}: QuestionProps) {
    return (
        <div
            className={`question ${isAnwered ? 'answered' : ''} ${isHighlighted && !isAnwered ? 'highlighted' : ''}`}
        >
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>
                </div>
                <div>
                    {children}
                </div>
            </footer>
        </div>
    )
}