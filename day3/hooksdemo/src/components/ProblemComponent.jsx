

export default function ProblemComponent() {

    if (Math.random() > 0.5) {
        throw new Error("Random error occurred!");
    }

    return (
        <div>
            <h4>Problem Component working fine</h4>
        </div>
    )
}

