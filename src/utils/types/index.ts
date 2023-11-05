interface IUseLocalStorageProps {
    key: string;
    initialValue: ITask[];
}

interface ITaskProps {
    task: ITask;
    id: string;
    toggleTaskCompletion: (id: string) => void;
    handleTaskNameChange: (
        id: string,
        event: React.ChangeEvent<HTMLInputElement>
    ) => void;
}

interface ITask {
    id: string;
    text: string;
    completed: boolean;
    parentId: string | null;
    subtasks: string[];
    before: string | null;
    next: string | null;
}

export type { IUseLocalStorageProps, ITask, ITaskProps };