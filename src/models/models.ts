import * as d3 from 'd3';

export interface NodeData extends d3.SimulationNodeDatum {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

export interface LinkData {
    source: NodeData;
    target: NodeData;
    opacity: number;
}

export interface Experience {
    title: string;
    position: string;
    duration: string;
    description: string;
    image: string;
}

export interface ProjectLink {
    text: string;
    url: string;
}

export interface Project {
    icon: string;
    title: string;
    description: string;
    technologies: string;
    links: ProjectLink[];
}

export interface ProjectsConfig {
    title: string;
    projects: Project[];
}