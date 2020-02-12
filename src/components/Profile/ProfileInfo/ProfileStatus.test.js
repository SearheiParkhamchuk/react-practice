import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('Profile Status Component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status='ololol'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('ololol');
    })

    test('span should be created after component init', () => {
        const root = create(<ProfileStatus />).root;
        const span = root.findAllByType('span');
        expect(span.length).toBe(1);
    })

    test('span should be created after component init', () => {
        const root = create(<ProfileStatus status='ololol'/>).root;
        const span = root.findByType('span');
        expect(span.children[0]).not.toBeNull();
        expect(span.children[0]).toBe('ololol');
    })

    test('input shouldn\'t be created after component init', () => {
        const root = create(<ProfileStatus/>).root;
        expect(() => {
            root.findByType('input');
        }).toThrow();
    })

    test('input should be displayed if editMode=true', () => {
        const root = create(<ProfileStatus status='ololol'/>).root;
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe('ololol')
    })

    test('callback should be called', () => {
        const mockCollback = jest.fn()
        const compomnent = create(<ProfileStatus status='ololol' updateUserStatus={ mockCollback }/>);
        const instance = compomnent.getInstance();
        instance.deactivateEditMode();
        expect(mockCollback.mock.calls.length).toBe(1);
    })
});