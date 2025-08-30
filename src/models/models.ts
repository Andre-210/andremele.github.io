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