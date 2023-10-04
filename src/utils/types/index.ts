interface IUseLocalStorageProps {
    key: string;
    initialValue: ITask[];
}

interface ITaskProps {
    task: ITask;
    index: number;
    toggleTaskCompletion: (index: number) => void;
    handleTaskNameChange: (
        index: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
}

interface ITask {
    text: string;
    completed: boolean;
}

export type { IUseLocalStorageProps, ITask, ITaskProps };